class Compare_product {

    //starting the process of comparing products
    compare_product(){

   cy.xpath('(//a[@href="https://tutorialsninja.com/demo/index.php?route=common/home"])[1]').click();

    cy.get('[placeholder="Search"]').click();

    //searching the product
    cy.get('[placeholder="Search"]').type('mac');

    //clicking on search
    cy.get('.fa-search').click();

    //selecting the product
    cy.xpath('(//button[@data-original-title="Compare this Product"])[1]').click();

    //clicking on compare
    cy.get(`[onclick="compare.add('43');"]`).click();
    
    //selecting the  second product
    cy.xpath('(//button[@data-original-title="Compare this Product"])[2]').click();
    cy.wait(4000)
    
    //clicking on compare
    cy.xpath('(//a[@href="https://tutorialsninja.com/demo/index.php?route=product/compare"])[1]').click();    
}

}
export default Compare_product;