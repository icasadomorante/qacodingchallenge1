describe('Booking.com', () => {
  const bookingData = require('../fixtures/booking.json');

  it('should search for properties in Porto from the 1st to the 7th of next month', () => {
    cy.visit('https://www.booking.com');

    // Accept the cookies
    cy.get('#onetrust-accept-btn-handler').click();

    // Wait for the search input field to be visible and enter the location
    cy.get('input[placeholder="Where are you going?"]')
      .type(`${bookingData.location}{enter}`)
      .wait(1000) // Wait for a second to let the dropdown appear
      .get('.c-autocomplete__item')
      .first()
      .click();

    // Select the check-in date as 1st of next month
    cy.get(`[data-testid="datepicker-day-${bookingData.checkinDate}"]`)
      .should('be.visible')
      .click();

    // Wait for the check-out date field to be visible and click it
    cy.get('[data-testid="search-widget-field-checkout"]')
      .should('be.visible')
      .click();

    // Select the check-out date as 7th of next month
    cy.get(`[data-testid="datepicker-day-${bookingData.checkoutDate}"]`)
      .should('be.visible')
      .click();

    // Click on the search button
    cy.get('.sb-searchbox__button')
      .should('be.visible')
      .click();

    // Wait for the results page to load and get the number of properties found
    cy.get('.sr_header').should('be.visible').then(($header) => {
      const resultText = $header.text().trim();
      const result = resultText.split(' ').shift();
      console.log(`Total properties found: ${result}`);
    });

    // Verify the check-in and check-out dates on the left panel
    cy.get('.sb-date-field__display')
      .should('be.visible')
      .contains(bookingData.checkinDisplay);
    cy.get('.sb-date-field__display')
      .should('be.visible')
      .contains(bookingData.checkoutDisplay);

    // Print the names of the properties found on the first page
    cy.get('.sr-hotel__title').each(($hotel) => {
      const hotelName = $hotel.text().trim();
      console.log(hotelName);
    });
  });
});
