describe('Popup Boxes', () => {
    it('Popup Boxes', () => {
        // Visit the login page
      cy.visit('https://practice-automation.com/');

      // Assertion
      cy.contains('Welcome to your software automation practice website!')
  
      // Click on the link with text Popups
      cy.get("a.wp-block-button__link.wp-element-button").contains('Popups').click();

      // Assertion
    //   cy.url().should('contain', '/popups/');

    //   // Click on Alert Popup button
    //   cy.get('button[id="alert"]').click();

    //   cy.on('window:alert', (e) => {
    //     expect(e).to.contains('Hi there, pal!');
    //     console.log(e);
    //   })


      // Click on Confirm Popup button (OK)
      cy.get('button[id="confirm"]').click();

      // Handling Confirm box
      cy.on('window:confirm', (text) => {
        // You can add assertions to check the text of the confirm popup if needed
        expect(text).to.equal('OK or Cancel, which will it be?');
        // Return false to dismiss the confirm dialog
        return false;
      });
      cy.get('p[id="confirmResult"]').should('be.visible').and('contain','OK it is!');
    });
    
});