/// <reference types="cypress" />

import headerComp from "../src/homage_ApplyPage/HeaderComponentObjects"
const headerCompObject=new headerComp();

describe('Homage components testing suite', () => {


  beforeEach("Common actions for each testcases",()=>{
    cy.visit('');
  });

  it('Verify header area functionalities', () => {
    cy.ApplyPageHeaderComponentExecutor();

  });

  it('Verify basic details functionalities',()=>{

  });

});