Booking.com Cypress Test

This project demonstrates an end-to-end test using Cypress for the Booking.com website. 

Prerequisites:
- Node.js and NPM installed
- Cypress installed globally or locally in the project directory
- Chrome browser installed

To run the tests:
1. Clone the repository.
2. Install the dependencies by running `npm install`.
3. Run the tests with the command `npx cypress run` or `npx cypress open` for interactive mode.
4. The tests will run in headless mode by default. To run in interactive mode, add the `--headed` flag to the command.

The test searches for properties in Porto from the 1st to the 7th of next month, prints the number of properties found, and prints the names of the properties found on the first page.

The test can be found in `cypress/integration/booking.spec.js`.

The test data can be found in `cypress/fixtures/booking.json`.