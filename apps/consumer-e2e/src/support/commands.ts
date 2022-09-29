import { alias } from "@truecar/testing/cypress-utils";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Chainable<Subject> {
      alias: typeof alias;
    }
  }
}

Cypress.Commands.add("alias", alias);
