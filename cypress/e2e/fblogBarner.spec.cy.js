describe('explores the frewelance blog page', () => {

  it('opens the blog page', () => {
    cy.visit('localhost:3000')
    cy.get('[data-cy="thefairwork_logo"]').should('contains.text', 'fairwork')
    cy.get('[href="https://www.thefairwork.com/about-us"] > p').should('be.visible')
    cy.get('[href="https://www.thefairwork.com/signup-options"] > p').contains('Sign Up')
    cy.get('[href="https://www.thefairwork.com/login"] > p').contains('Login')
    cy.get('[data-cy="mainBanner"]').contains('TheFairWork Blog').should('be.visible')
    cy.get('.Banner_description__Fd_42')
    .contains('Explore new technologies, industry insights, stories of success, tools, and inspiration about the future of tech talent and the new world of work')
    cy.get("input[placeholder='What do you want to read about?']").type('Hello Freelancer')
     })

  it('has blog articles containing images of the writer', () => {
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
    cy.get('h2').should('be.visible')
    cy.get('.ArticleDetails_image__d3PUU').should('be.visible')
    cy.wait(2000)
    cy.go('back')
    
  })

  it("has pagination including Previous and next", () => {
    cy.get(':nth-child(1) > [data-cy="paging pre-next"]').should('be.visible').click()
    cy.get(':nth-child(2) > [data-cy="paging p"]').should('be.visible').click()
    cy.get('.Pagination_pagination__ShHE2 > :nth-child(3) > p').should('be.visible').click()
    cy.get(':nth-child(8) > [data-cy="paging p"]').should('be.visible').click()
    cy.get(':nth-child(9) > [data-cy="paging pre-next"]').should('be.visible').click() 
})

it('has most read articles section', () => {
    cy.visit('localhost:3000')
    cy.get('[data-cy="most r"]').should('have.text', 'Most Read Articles')
 
})
 
it('displays various links in the footer', () => {
    cy.get('[data-cy="forClients"]').should('have.text', 'For Clients')
    cy.get('[data-cy="BecomeaClients"]').should('have.text', 'Become A Client')
    cy.get('[data-cy="forFreelancers"]').should('have.text', 'For Talent')
    cy.get('[data-cy="BecomeaFairworkerLink"]').should('have.text', 'Become A FairWorker')
    cy.get('[data-cy="AmalitechBigiskillT"]').should('have.text', 'AmaliTech Digital Skills Training')
    cy.get('[data-cy="AmalitechCompany"]').should('have.text', 'Company')
    cy.get('[data-cy="AboutTheFairWork"]').should('have.text', 'About TheFairWork')
    cy.get('[data-cy="AmalitechTeam"]').should('have.text', 'Team')
    cy.get('[data-cy="AmalitechServices"]').should('have.text', 'Services')
    cy.get('[data-cy="PrivacyPolicy"] > p').should('have.text', 'Privacy Policy')
    cy.get('[data-cy="ContactUs"]').should('have.text', 'Contact Us')

})

it('has social media links like Facebook and Linkedin', () => {
  cy.get('[data-cy="followUs"]').should('have.text', 'Follow Us:')
   cy.get('[ data-cy="LinkedIn"]')
   cy.get('[ data-cy="Facebook"]')
   cy.get('[data-cy="copyRightMsg"]')   
 .should('have.text',  '© Copyright 2022 TheFairWork. All Rights Reserved.')
})
})
