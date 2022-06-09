Cypress.Commands.add("zeroLogin", (username, password) => {
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.get("#user_login").clear();
  cy.get("#user_login").type(username);
  cy.get("#user_password").clear();
  cy.get("#user_password").type(password);
  cy.get("#user_remember_me").click();
  cy.get("input[name='submit']").click();
  //cy.url().should("include", "inventory.html");
});

Cypress.Commands.add("paybills", (payee, account, amount, date, description) => {
  cy.get('select[id="sp_payee"]').select("Sprint").should("have.value", "sprint");
  cy.get('select[id="sp_account"]').select("Checking").should("have.value", "2");
  cy.get("#sp_amount").clear();
  cy.get("#sp_amount").type("100");
  cy.get("#sp_date").click().type("2022-04-10");
  cy.get("#sp_amount").type("100").click();
  cy.get("#sp_description").type("Belajar custom commands cypress !!!");
  cy.get("#pay_saved_payees").click();
  //cy.get("#DateTimeInput").click().type();
});
