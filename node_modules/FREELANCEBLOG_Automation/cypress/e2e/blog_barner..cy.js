describe('explores the frewelance blog page', () => {
  it('opens the blog page', () => {
    cy.visit('localhost:3000')
    cy.get('[data-cy="thefairwork_logo"]').should('be.visible')
    cy.get('[data-cy="mainBanner"]').contains('TheFairWork Blog').should('be.visible')
    cy.get('.Banner_description__Fd_42')
    .contains('Explore new technologies, industry insights, stories of success, tools, and inspiration about the future of tech talent and the new world of work')
    cy.get("input[placeholder='What do you want to read about?']").type('Hello Freelancer')
    
  
  })

  it('has blog articles containing images of the writer', () => {
    //cy.visit('localhost:3000')
    cy.get('.container > :nth-child(1) > .mb-4').contains('Articles')
    cy.get('[src="/_next/image?url=%2Fimages%2FRectangle%209.png&w=1080&q=75"]').should('be.visible')
    cy.get('.container > .MuiGrid-container > :nth-child(1) > #cardMain > .MuiCardContent-root > :nth-child(2) > .normalTitle')
    cy.get('.container > .MuiGrid-container > :nth-child(1) > #cardMain > .MuiCardContent-root > [data-cy="category"]').should('have.text', 'NEWS').click()
    cy.get("[data-cy='normalTitle']").should('be.visible')
    cy.get('.container > .MuiGrid-container > :nth-child(1) > #cardMain > .MuiCardContent-root > [data-cy="authorsDetails"] > [data-cy="postBy"]').should('have.text', 'by')
    cy.get('.container > .MuiGrid-container > :nth-child(1) > #cardMain > .MuiCardContent-root > [data-cy="styles.contentDescription"]').should('be.visible')
    cy.get("[data-cy='authorName']").should('be.visible')
    cy.get("[data-cy='styles.avatarprofilePicture']").should('be.visible')
    cy.get('.container > .MuiGrid-container > :nth-child(1) > #cardMain > .MuiCardContent-root > .MuiButtonBase-root > .MuiButton-label').should('have.text', 'READ MORE').should('be.visible').click()
  })
})
