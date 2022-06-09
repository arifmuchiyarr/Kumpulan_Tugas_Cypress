/// <reference types="cypress" />

describe("Tugas Automation SWAG", () => {
  it("visit the website", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.url().should("include", "");
  });

  it("Should Try Login", () => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.fixture("saucelabs1").then((saucelabs1) => {
      const username = saucelabs1.username;
      const password = saucelabs1.password;

      cy.get("#user-name").clear();
      cy.get("#user-name").type(username);

      cy.get("#password").clear();
      cy.get("#password").type(password);

      cy.get("#login-button").click();
      cy.url().should("include", "inventory.html");

      // cy.get(".product_sort_container").should("contain.text", "Price (high to low)").click();
    });
  });
  it("Should Short By", () => {
    cy.get("select").select("Price (high to low)");
    cy.get("#item_5_title_link").find("div").should("contain", "Sauce Labs Fleece Jacket").click();
    cy.url().should("include", "inventory-item.html?id=5");
  });
  it("Should Try Login", () => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.fixture("saucelabs1").then((saucelabs1) => {
      const username = saucelabs1.username;
      const password = saucelabs1.password;

      cy.get("#user-name").clear();
      cy.get("#user-name").type(username);

      cy.get("#password").clear();
      cy.get("#password").type(password);

      cy.get("#login-button").click();
      cy.url().should("include", "inventory.html");

      // cy.get(".product_sort_container").should("contain.text", "Price (high to low)").click();
    });
  });
  it("Should Short By", () => {
    cy.get("select").select("Price (high to low)");
    cy.get("#item_5_title_link").find("div").should("contain", "Sauce Labs Fleece Jacket").click();
    cy.url().should("include", "inventory-item.html?id=5");
  });
});
