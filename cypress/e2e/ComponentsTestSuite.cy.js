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
    cy.ApplierSelectingBasicAgeAndResidency(appData.legalAge,appData.SingaResidency);
  });

  it('Verify selecting having healthcare experience',()=>{
    cy.ApplierSelectingExperience(appData.ApplierExperience,appData.ExperienceDuration,appData.AppliedRole);
  });

  it('Verify selecting single Job Opportunity',()=>{
    cy.ApplierSelectingSingleOpportunity(appData.JobOpp1);
  });

  it('Verify selecting single Engagement Type',()=>{
    cy.ApplierSelectingSingleEngagment(appData.EngageType1);
  });

  it('Verify applier entering background check information',()=>{
    cy.ApplierBackgroundInfo(appData.BackCheckBtn,appData.ReferralCode,appData.HearAbutJob);
  });

});