/// <reference types="cypress" />


describe('Validate content', () =>{
    it('Success validate conten', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/bulbasaur').as('bulbasaur')
        cy.get('@bulbasaur')
        .its('body')
        .should('include', {"name": "bulbasaur"})
    });
    it('Success validate conten', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/bulbasaur').as('bulbasaur')
        cy.get('@bulbasaur').then((response) => {
            expect(response.body.abilities[0].ability.name).to.eq('overgrow');
        })
    });
})