describe('Create New User', () => {
    it('Create User', () => {
        var user = {
            'name' : 'Arif',
            'job' : 'Tester Engineer'
        }
         cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
             expect(response.body).to.have.property('name', 'Arif')
         })
    });
})
