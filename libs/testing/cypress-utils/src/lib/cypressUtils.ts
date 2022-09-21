type Aliases = {
  // Add alias types here
  [key: string]: unknown;
};
export const alias = <TAlias extends keyof Aliases>(
  alias: TAlias,
): Cypress.Chainable<Aliases[TAlias]> => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return cy.get(`@${alias}`) as any;
};
