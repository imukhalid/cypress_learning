describe("Popup Boxes", () => {
  it("Alert Popup", () => {
    // Visit the login page
    cy.visit("https://practice-automation.com/");

    // Assertion to check if the welcome text is present
    cy.contains("Welcome to your software automation practice website!");

    // Click on the link with text Popups
    cy.get("a.wp-block-button__link.wp-element-button")
      .contains("Popups")
      .click();

    // Assertion to check if the URL contains '/popups/'
    cy.url().should("contain", "/popups/");

    // Click on Alert Popup button
    cy.get('button[id="alert"]').click();

    // Handling Alert popup
    cy.on("window:alert", (e) => {
      expect(e).to.contains("Hi there, pal!");
      console.log(e);
    });
  });

  it("Confirm Popup", () => {
    // Visit the login page
    cy.visit("https://practice-automation.com/");

    // Assertion to check if the welcome text is present
    cy.contains("Welcome to your software automation practice website!");

    // Click on the link with text Popups
    cy.get("a.wp-block-button__link.wp-element-button")
      .contains("Popups")
      .click();

    // Assertion to check if the URL contains '/popups/'
    cy.url().should("contain", "/popups/");

    // Click on Confirm Popup button (OK)
    cy.get('button[id="confirm"]').click();

    // Handling Confirm box
    cy.on("window:confirm", (text) => {
      // Add assertions to check the text of the confirm popup
      expect(text).to.equal("OK or Cancel, which will it be?");
      // Return false to dismiss the confirm dialog
      return true;
    });

    // Assertion to check if the confirm result is displayed and contains the expected text
    cy.get('p[id="confirmResult"]')
      .should("be.visible")
      .and("contain", "OK it is!");
  });

  it("Prompt Popup", () => {
    // Visit the login page
    cy.visit("https://practice-automation.com/");

    // Assertion to check if the welcome text is present
    cy.contains("Welcome to your software automation practice website!");

    // Click on the link with text Popups
    cy.get("a.wp-block-button__link.wp-element-button")
      .contains("Popups")
      .click();

    // Assertion to check if the URL contains '/popups/'
    cy.url().should("contain", "/popups/");

    const promptInput = "Welcome";

    cy.window().then(function (p) {
      //stubbing prompt window
      cy.get('button[id="prompt"]').click();
      cy.stub(p, "prompt").returns("Welcome");
    });

    // verify application message on clicking on OK
    cy.get("#promptResult").contains("Nice to meet you, Welcome!");
  });
});
