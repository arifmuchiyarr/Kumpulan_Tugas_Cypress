/// <reference types="cypress" />

describe("login /logout Test", () => {
  before(() => {
    cy.visit("http://zero.webappsecurity.com/index.html");
    cy.url().should("include", "index.html");
    cy.get("#signin_button").click();
  });
  it("Should try to login with invalid data", () => {
    cy.get("#login_form").should("be.visible");
    cy.get("#user_login").type("invalid username");
    cy.get("#user_password").type("invalid password");
    cy.get('input[name="submit"]').click();
  });

  it("Should display error message", () => {
    cy.get(".alert-error").should("be.visible").and("contain.text", "Login and/or password are wrong.");
  });

  it("Should login with valid data", () => {
    cy.fixture("zerologin").then((zerologin) => {
      const username = zerologin.username;
      const password = zerologin.password;

      cy.zeroLogin(username, password);

      cy.get("h2").should("contain.text", "Cash Accounts");
    });
  });
  it("Should logout from the aplication", () => {
    cy.contains("username").click();
    cy.get("#logout_link").click();
    cy.get("h4").should("contain.text", "Online Banking");
  });
});
