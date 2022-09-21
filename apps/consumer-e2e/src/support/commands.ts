import { alias } from "@truecar/testing/cypress-utils";

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Chainable<Subject> {
    alias: typeof alias;
  }
}

// @ts-expect-error what is with these cypress types?
Cypress.Commands.add("alias", alias);
