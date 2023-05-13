/// <reference types="cypress" />
import headerComp from "../src/homage_ApplyPage/HeaderComponentObjects"
import basicComp from "../src/homage_ApplyPage/BasicComponentObjects"

const headerCompObject=new headerComp();

Cypress.Commands.add("ApplyPageHeaderComponentExecutor",()=>{
    headerCompObject.GetHeaderImage().should('be.visible');
    cy.screenshot();
    headerCompObject.GetSelectLocation().should('be.visible').then(($obj)=>{
      cy.wrap($obj).contains('Singapore - Singapore');
    });

});