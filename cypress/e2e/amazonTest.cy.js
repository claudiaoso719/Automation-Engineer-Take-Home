describe('Amazon Test', function(){
  
  before(function() {
    cy.visit('https://amazon.com')
    cy.get('#twotabsearchtextbox').type("Sharon Jones {Enter}")
    cy.contains('I Learned The Hard Way').click()
  })

  it('Get CD Price', function(){
    cy.get('.a-button-text').contains('Audio CD').click()
    cy.get('.a-color-base > .a-size-base')
    .invoke('text')
    .then((price) => {
      cy.log(`The Album CD Price is ${price}`)
    })
  })

  it('Get Customer Rating', function(){
    cy.get('#averageCustomerReviews > [data-action="acrStarsLink-click-metrics"] > #acrPopover > span.a-declarative > .a-popover-trigger > .a-size-base')
    .invoke('text')
    .then((rating) => {
      const comparison = '4.5' == rating
      cy.log(`It is rated ${rating} stars. Is this rating equal to 4.5? ${comparison}`)
    })
  })
   
  it('Get Album Customers Also Bought', function(){
    cy.scrollTo('bottom')
    cy.wait(200)
    cy.contains('Customers who bought').scrollIntoView()
    cy.get('#anonCarousel5 > .a-carousel > [aria-posinset="1"] > .p13n-sc-uncoverable-faceout > :nth-child(2) > span > ._cDEzb_p13n-sc-css-line-clamp-3_g3dy1')
    .invoke('text')
    .then((title) => {
      cy.log(`The title is ${title}`)
    })
  })

  it('Assertion Test', function(){
    cy.scrollTo('top')
    cy.get('#averageCustomerReviews > [data-action="acrStarsLink-click-metrics"] > #acrPopover > span.a-declarative > .a-popover-trigger > .a-size-base')
    .invoke('text').should('eq','4.5')
  })

})
