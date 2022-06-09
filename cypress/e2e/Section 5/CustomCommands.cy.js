/// <reference types="cypress" />
describe("Pay Bills", () => {
  it("visit the login website", () => {
    cy.visit("http://zero.webappsecurity.com/bank/pay-bills.html");
    //cy.url().should("include", "/bank/pay-bills.html");
  });
  it("Should Try Login", () => {
    cy.fixture("zerologin").then((zerologin) => {
      const username = zerologin.username;
      const password = zerologin.password;

      cy.zeroLogin(username, password);
      // cy.get(".product_sort_container").should("contain.text", "Price (high to low)").click();
    });
  });
  it("Should pay bills", () => {
    // cy.get('li[id="pay_bills_tab"]').find("a").contains("Pay Bills").click();
    cy.visit("http://zero.webappsecurity.com/bank/pay-bills.html");
  });

  it("Should input form", () => {
    cy.fixture("zerologin").then((zerologin) => {
      const username = zerologin.username;
      const password = zerologin.password;

      cy.zeroLogin(username, password);
      // cy.get(".product_sort_container").should("contain.text", "Price (high to low)").click();
    });
    cy.get('li[id="pay_bills_tab"]').find("a").contains("Pay Bills").click();
    cy.paybills();
  });
});
//     cy.get("ul").should("have.id", "nav-tabs").find("li").should("have.id", "pay_bills_tab").find("a").should("contain.text", "Pay Bills");
