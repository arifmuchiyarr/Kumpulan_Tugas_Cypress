/// <reference types="cypress" />

describe("working with input", () => {
  it("visit the website", () => {
    cy.visit("http://zero.webappsecurity.com/login.html", { timeout: 10000 });
    cy.url().should("include", "login.html");
  });
  it("should fill username", () => {
    cy.get("#user_login").clear();
    cy.get("#user_login").type("username");
  });
  it("should fill password", () => {
    cy.get("input[name='user_password'").clear();
    cy.get("input[name='user_password'").type("password");
  });
  it("should check remember me", () => {
    cy.get("#user_remember_me").click();
  });
});
