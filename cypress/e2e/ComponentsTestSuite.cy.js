/// <reference types="cypress" />

import headerComp from "../src/homage_ApplyPage/HeaderComponentObjects"
const headerCompObject=new headerComp();

describe('Homage components testing suite', () => {

  const appData=require('../appData');

  beforeEach("Visit homage site before executing each testcases",()=>{
    cy.visit('https://apply.homage.sg/');
  });

  it('Verify header image availiabilty and location', () => {
    cy.ApplyPageHeaderComponentExecutor();
  });

  it('Verify adding applier basic information ',()=>{
    cy.ApplierEnteringBasicInfo(appData.firstName,appData.lastName,appData.email,appData.phoneNumer);
  });

  it('Verify selecting applier legal age and residency',()=>{
    cy.ApplierSelectingBasicAgeAndResidency();
  });

  it('Verify selecting having healthcare experience',()=>{
    cy.ApplierSelectingWhenHavingExperience();
  });

});