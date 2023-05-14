/// <reference types="cypress" />
import headerComp from "../src/homage_ApplyPage/HeaderComponentObjects"
import basicComp from "../src/homage_ApplyPage/BasicComponentObjects"
import roleComp from "../src/homage_ApplyPage/RoleComponentsObjects"

const headerCompObject=new headerComp();
const basicCompObject=new basicComp();
const roleCompObject=new roleComp();


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


Cypress.Commands.add("ApplierSelectingBasicAgeAndResidency",()=>{
  
  basicCompObject.GetLegalAgeYesButton().scrollIntoView().should('be.visible').click({force:true});
  basicCompObject.GetResideSingaYesButton().should('be.visible').click({force:true});
});

Cypress.Commands.add("ApplierSelectingWhenHavingExperience",()=>{
  roleCompObject.GetExperienceYesButton().scrollIntoView().should('be.visible').click({force:true});
  roleCompObject.GetExperienceLess1year().should('be.visible').click({force:true});
  roleCompObject.GetDoctorRoleApply().should('be.visible').click({force:true});
  
});

Cypress.Commands.add("ApplierSelectingWhenHavingNoExperience",()=>{
 //will implement later
});