import 'cypress-file-upload'
describe('File Upload', () => {
    it('Single File Upload', () => {
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('h3').should('have.text', 'File Uploader');
        cy.get('input[id="file-upload"]').attachFile('client1.jpg');
        cy.get('input[id="file-submit"]').click();
        cy.get('h3').should('have.text', 'File Uploaded!')
    });

    it('File Upload - Rename', () => {
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('h3').should('have.text', 'File Uploader');
        cy.get('input[id="file-upload"]').attachFile({filePath:'client1.jpg', fileName:'myfile.jpg'});
        cy.get('input[id="file-submit"]').click();
        cy.get('h3').should('have.text', 'File Uploaded!')
    });

    it.only('File Upload - Drag and Drop', () => {
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('h3').should('have.text', 'File Uploader');
        cy.get('div[id="drag-drop-upload"]').attachFile('client1.jpg', {subjectType:'drag-n-drop'});
        cy.get('#drag-drop-upload > div > div.dz-details > div > span').should('have.text', 'client1.jpg')
        // cy.get('input[id="file-submit"]').click();
        // cy.get('h3').should('have.text', 'File Uploaded!')
    });
});