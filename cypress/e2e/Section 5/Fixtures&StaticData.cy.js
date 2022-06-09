/// <reference types="cypress" />

describe("Login With Fixture Data", () => {
  it("visit the website", () => {
    cy.visit("https://www.saucedemo.com/");
  });

  it("Should try login", () => {
    cy.fixture("saucelabs").then((saucelabs) => {
      const username = saucelabs.username;
      const password = saucelabs.password;

      cy.get("#user-name").clear();
      cy.get("#user-name").type(username);

      cy.get("#password").clear();
      cy.get("#password").type(password);

      cy.get("#login-button").click();

      cy.get("h3").should("contain.text", "Epic sadface: Username and password do not match any user in this service"); //h3[.='Epic sadface: Username and password do not match any user in this service']
    });
  });
});
