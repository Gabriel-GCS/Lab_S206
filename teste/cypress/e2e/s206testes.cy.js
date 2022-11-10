/// <reference types="cypress"/>

describe('Criando cenário de teste para o site roblox', ()=> {

  it.skip('Caso de teste: logar usuario', () => {
    LogarUsuario()
    cy.get('#nav-robux-amount').should('have.text', '0')

  })

  it.skip('Caso de teste: pesquisar um jogo', () => {
    cy.visit('https://web.roblox.com/discover#/')
    cy.get('[data-testid="navigation-search-input-field"]').type('one piece {enter}')
  })

  it.skip('Caso de teste: assinar premium', () => {
    LogarUsuario()
    cy.get('.icon-nav-menu').click()
    cy.get('#upgrade-now-button').click()
    cy.get('.premium-logo-container > .get-premium-button').click()
    cy.get(':nth-child(1) > a > .subscription-card > .subscribe-button').click()
    cy.get(':nth-child(1) > .payment-method-label > .payment-method-label-text').should('contain.text', 'Cartão de crédito')

  })

  it.skip('Caso de teste: logar usuario invalido', () => {

    cy.visit('https://web.roblox.com/discover#/')
    cy.get('.rbx-navbar-login').click()
    cy.get('#login-username').type('testecypress12345')
    cy.get('#login-password').type('teste12345')
    cy.get('#login-button').click()
    cy.get('#login-form-error').should('have.text', 'Nome de usuário ou senha incorretos.')
  })

  it.skip('Caso de teste: clicar categoria', () => {

    cy.visit('https://web.roblox.com/discover#/')
    cy.get(':nth-child(2) > [data-testid="game-lists-game-container-header"] > h2 > a').click()
    cy.get('h1').should('contain','Mais cativantes')

  })

  it('Caso de teste: clicar categoria', () => {

    cy.visit('https://web.roblox.com/discover#/')

  })

  function LogarUsuario(){

    cy.visit('https://web.roblox.com/discover#/')
    cy.get('.rbx-navbar-login').click()
    cy.get('#login-username').type('testecypress123')
    cy.get('#login-password').type('teste12345')
    cy.get('#login-button').click()
  }

});