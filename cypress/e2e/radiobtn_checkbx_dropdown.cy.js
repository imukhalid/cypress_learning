/// <reference types="cypress" />

describe('Checkboxes', () => {
    it('Title', () => {
        cy.visit('https://practice-automation.com/');
        cy.contains('Welcome to your software automation practice website!')

        cy.get("a.wp-block-button__link.wp-element-button").contains('Form Fields').click();

        // Check Visibility
        cy.get("input[id='drink1']").should('be.visible').check().should('be.checked')
        cy.get("input[id='drink2']").should('be.visible').check().should('be.checked')
        cy.get("input[id='drink3']").should('be.visible').check().should('be.checked')

        // // Check
        // cy.get("input[id='drink1']").check()
        // cy.get("input[id='drink2']").check()
        // cy.get("input[id='drink3']").check()

        // // Assert that the field is checked
        // cy.get("input[id='drink1']").should('be.checked')
        // cy.get("input[id='drink2']").should('be.checked')
        // cy.get("input[id='drink3']").should('be.checked')

        // cy.get("input[id='drink1']").uncheck()
        // cy.get("input[id='drink2']").uncheck()

        // // Assert that the field is checked
        // cy.get("input[id='drink1']").should('not.be.checked')
        // cy.get("input[id='drink2']").should('not.be.checked')
        // cy.get("input[id='drink3']").should('be.checked')
    });
});