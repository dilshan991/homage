/// <reference types="cypress" />

import headerComp from "../src/homage_ApplyPage/HeaderComponentObjects"
const headerCompObject=new headerComp();

describe('Homage system testing suite', () => {

  const appData=require('../appData');

  it('Execute all functionalities by single testcase block', () => {
    cy.visit('https://apply.homage.sg/');
    cy.ApplyPageHeaderComponentExecutor();
    cy.ApplierEnteringBasicInfo(appData.firstName,appData.lastName,appData.email,appData.phoneNumer);
    cy.ApplierSelectingBasicAgeAndResidency();
    cy.ApplierSelectingWhenHavingExperience();
  });


});