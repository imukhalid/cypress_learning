describe('Login Test', () => {
  it('should login successfully with correct credentials', () => {
    // Visit the login page
    cy.visit('/login');

    // Enter username and password
    cy.get('input[name="username"]').type('your_username');
    cy.get('input[name="password"]').type('your_password');

    // Click on the login button
    cy.get('button[type="submit"]').click();

    // Assertion to check if login was successful
    cy.url().should('include', '/dashboard');
    cy.contains('Welcome').should('be.visible');
  });
})