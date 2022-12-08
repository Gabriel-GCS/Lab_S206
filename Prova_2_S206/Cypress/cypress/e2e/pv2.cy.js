describe('Criando cenário de teste para o site demoqa.com', ()=> {

  it('Caso de teste: criar computador', () => {
    cy.visit('https://computer-database.gatling.io/computers')
    cy.get('#add').click()
    cy.get('#name').type('Teste')
    cy.get('#introduced').type('2000-01-13')
    cy.get('#discontinued').type('2001-02-12')
    cy.get('#company').select('Apple Inc.')
    cy.get('.primary').click()
    cy.get('strong').should('contain.text', 'Done !')

  })
  it('Caso de teste: criar computador invalido', () => {
    cy.visit('https://computer-database.gatling.io/computers')
    cy.get('#add').click()
    cy.get('#name').type('Teste')
    cy.get('#introduced').type('teste')
    cy.get('#discontinued').type('2001-02-12')
    cy.get('#company').select('Apple Inc.')
    cy.get('.primary').click()
    cy.get('.error > .input > .help-inline').should('contain.text', 'Failed to decode date')

  })

  it('Editar computador ACE', () => {
    ComputadorAce()
    cy.get('#introduced').type('2000-01-13')
    cy.get('#discontinued').type('2001-02-12')
    cy.get('#company').select('Apple Inc.')
    cy.get('.primary').click()
    cy.get('strong').should('contain.text', 'Done !')
  })

  it('Deletar computador ACE', () => {
    ComputadorAce()
    cy.get('.topRight > .btn').click()
    cy.get('strong').should('contain.text', 'Done !')
  })

  function ComputadorAce(){
    cy.visit('https://computer-database.gatling.io/computers')
    cy.get('tbody > :nth-child(1) > :nth-child(1) > a').click()
  }

});