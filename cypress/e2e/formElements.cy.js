describe('Login Test', () => {
    it('Radio Buttons, Check Boxes, Dropdowns', () => {
      // Visit the login page
      cy.visit('https://practice-automation.com/');
      cy.contains('Welcome to your software automation practice website!')
  
      cy.get("a.wp-block-button__link.wp-element-button").contains('Form Fields').click();

      // Check Visibility
      cy.get("input[id='drink1']").should('be.visible')

      // Check
      cy.get("input[id='drink1']").check()

      // Assert that the field is checked
      cy.get("input[id='drink1']").should('be.checked')

      // Unchecking
      cy.get("input[id='drink1']").uncheck()
      cy.get("input[id='drink1']").should('not.be.checked')

      ///////////////////////////////////////////////////////////////////

      // Check Visibility
      cy.get("input[id='color1']").should('be.visible')

      // Check
      cy.get("input[id='color1']").check()

      // Assert that the field is checked
      cy.get("input[id='color1']").should('be.checked')

      

      cy.get("#siblings").select('Yes')
      cy.get("#siblings").should('have.value', 'yes')
      cy.log(cy.title())
    });
  })