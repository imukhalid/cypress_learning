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

    ///////////////////////////////////////////////////////////////////

    it.only('', () => {
      // Visit the login page
      cy.visit('https://practice-automation.com/');

      // Assertion
      cy.contains('Welcome to your software automation practice website!')
  
      // Click on the link with text Popups
      cy.get("a.wp-block-button__link.wp-element-button").contains('Popups').click();

      // Assertion
      cy.url().should('contain', '/popups/');

      // Click on Alert Popup button
      cy.get('button[id="alert"]').click();

      // cy.on() is used to listen for specific browser events. In this case, it listens for when a window.alert is triggered in the browser.
      // (e) => { ... }:This is an arrow function that is executed when the window:alert event is triggered.
      // This line uses the expect assertion to check if the text of the alert (e) contains the string 'Hi there, pal!'.
      // Alert window is automatically closed by cypress
      cy.on('window:alert', (e) => {
        expect(e).to.contains('Hi there, pal!');
        console.log(e);
      })
      

      // Click on Confirm Popup button (OK)
      cy.get('button[id="confirm"]').click();

      // Handling Confirm box
      cy.on('window:confirm', (text) => {
        // You can add assertions to check the text of the confirm popup if needed
        expect(text).to.equal('OK or Cancel, which will it be?');
        // Return false to dismiss the confirm dialog
        return true;
      });
      cy.get('p[id="confirmResult"]').should('be.visible').and('contain','OK it is!');



      // Click on Confirm Popup button (CANCEL)
      cy.get('button[id="confirm"]').click();

      // Handling Confirm box
      cy.on('window:confirm', (text) => {
        // You can add assertions to check the text of the confirm popup if needed
        expect(text).to.equal('OK or Cancel, which will it be?');
        // Return false to dismiss the confirm dialog
        return false;
      });
      cy.get('p[id="confirmResult"]').should('be.visible').and('contain','Cancel it is!');
    });
    

  })