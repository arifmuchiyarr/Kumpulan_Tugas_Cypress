const URL = 'http://zero.webappsecurity.com/index.html'
const SEARCH_BOX = '#searchTerm'

class SearchPage{
    static visit(){
        cy.visit(URL)
    }
    static fillSearchBox(search){
        cy.get(SEARCH_BOX).type(search)
    }
}
export default SearchPage