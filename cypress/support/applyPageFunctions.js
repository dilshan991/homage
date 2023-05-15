/// <reference types="cypress" />
import headerComp from "../src/homage_ApplyPage/HeaderComponentObjects"
import basicComp from "../src/homage_ApplyPage/BasicComponentObjects"
import roleComp from "../src/homage_ApplyPage/RoleComponentsObjects"
import jobOppComp from "../src/homage_ApplyPage/JobOppComponentObjects"
import engageComp from "../src/homage_ApplyPage/EngagementComponentObjects"
import backComp from "../src/homage_ApplyPage/BackgroundComponentObjects"

const headerCompObject=new headerComp();
const basicCompObject=new basicComp();
const roleCompObject=new roleComp();
const jobOppCompObject=new jobOppComp();
const engageCompObject=new engageComp();
const backCompObject=new backComp();


Cypress.Commands.add("ApplyPageHeaderComponentExecutor",()=>{
    headerCompObject.GetHeaderImage().should('be.visible');
    cy.screenshot();
    headerCompObject.GetSelectLocation().should('be.visible').then(($obj)=>{
      cy.wrap($obj).contains('Singapore - Singapore');
    });
});

Cypress.Commands.add("ApplierEnteringBasicInfo",(firstName,lastName,email,phoneNumer)=>{

  basicCompObject.GetFirstName().should('be.visible').then(($obj)=>{
    cy.wrap($obj).click({force:true}).type(firstName);
  });

  basicCompObject.GetLastName().should('be.visible').then(($obj)=>{
    cy.wrap($obj).click({force:true}).type(lastName);
  });

  basicCompObject.GetEmailAddress().should('be.visible').then(($obj)=>{
    cy.wrap($obj).click({force:true}).type(email);
  });

  basicCompObject.GetPhoneNumber().should('be.visible').then(($obj)=>{
    cy.wrap($obj).click({force:true}).type(phoneNumer);
  });

});


Cypress.Commands.add("ApplierSelectingBasicAgeAndResidency",(ageVerify,residencyVerify)=>{
  
  basicCompObject.GetLegalAgeButton(ageVerify).scrollIntoView().should('be.visible').click({force:true});
  basicCompObject.GetResidecyButton(residencyVerify).should('be.visible').click({force:true});
});

Cypress.Commands.add("ApplierSelectingExperience",(experience,duration,designation)=>{
  roleCompObject.GetExperienceButton(experience).scrollIntoView().should('be.visible').click({force:true});
  roleCompObject.GetExperienceDuration(duration).should('be.visible').click({force:true});
  roleCompObject.GetApplierRoleDesignation(designation).should('be.visible').click({force:true});
  
});

Cypress.Commands.add("ApplierSelectingSingleOpportunity",(oppType)=>{

  jobOppCompObject.GetDiffOpportunitiesExpand().scrollIntoView().should('be.visible').click({force:true});
  jobOppCompObject.GetOpportunityType(oppType).should('be.visible').click({force:true});
 
});

Cypress.Commands.add("ApplierSelectingSingleEngagment",(EngageType)=>{
  engageCompObject.GetEngagementTypeExpand().scrollIntoView().should('be.visible').click({force:true});
  engageCompObject.GetSelectingEngagmentType(EngageType).should('be.visible').click({force:true});
 
});

Cypress.Commands.add("ApplierBackgroundInfo",(SelectBtn,ReferralCode,HearabtJobOption)=>{
  backCompObject.GetBackgroundButton().scrollIntoView().should('be.visible').click({force:true});
  backCompObject.Getreferralinput().should('be.visible').click({force:true}).type(ReferralCode);
  backCompObject.GetHearAboutJob().should('be.visible').click({force:true});
  backCompObject.GetHearAboutJobOption(HearabtJobOption).click({force:true});
});