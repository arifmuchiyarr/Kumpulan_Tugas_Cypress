/// <reference types="cypress" />

describe("My First Test", () => {
  it('clicking "type" shows the right headings', () => {
    cy.visit("https://example.cypress.io");
    cy.pause();
    cy.contains("type").click();

    // Should be on a new URL which includes '/commands/action'
    cy.url().should("include", "/commands/actions");
    // get an input, type into it and verify that the value has been updated
    cy.get(".action-email").type("arif@email.com").should("have.value", "arif@email.com");
  });
});
