/// <reference types="cypress" />

import headerComp from "../src/homage_ApplyPage/HeaderComponentObjects"
const headerCompObject=new headerComp();

describe('Homage system testing suite', () => {

  const appData=require('../appData');

  it('Execute all functionalities by single testcase block', () => {
    cy.visit('https://apply.homage.sg/');
    cy.ApplyPageHeaderComponentExecutor();
    cy.ApplierEnteringBasicInfo(appData.firstName,appData.lastName,appData.email,appData.phoneNumer);
    cy.ApplierSelectingBasicAgeAndResidency(appData.legalAge,appData.SingaResidency);
    cy.ApplierSelectingExperience(appData.ApplierExperience,appData.ExperienceDuration,appData.AppliedRole);
    cy.ApplierSelectingSingleOpportunity(appData.JobOpp1);
  });


});