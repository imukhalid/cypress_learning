describe('Login Test', () => {
  it('should login successfully with correct credentials', () => {
    // Visit the login page
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Enter username and password
    cy.get("input[name='username']").type('Admin');
    cy.get("input[name='username']").should('have.value', 'Admin');

    cy.get("input[name='password']").type('admin123');
    cy.get("input[name='password']").should('have.value', 'admin123');

    // Click on the login button
    cy.get("button[type='submit']").should('be.visible').click();

    // Assertion to check if login was successful
    cy.url().should('include', '/dashboard');
    cy.contains('Dashboard').should('be.visible');
  });
})