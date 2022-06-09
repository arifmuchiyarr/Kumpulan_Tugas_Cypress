/// <reference types="cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import SearchPage from './searchPage'

Given('I open homepage', () => {
    SearchPage.visit()
})

When('I type Transfer Funds and push button enter', () => {
    SearchPage.fillSearchBox('Transfer Funds{enter}')
})

Then('I should see search result page', () => {
    cy.get('h2').should('contain.text', 'Search Results:')
})