require('cypress-xpath');

class EngagementComponentObjects{

    GetEngagementTypeExpand(){
        return cy.xpath("//span[@class='job-types-popup-text']",{timeout:7000});
    }

    GetSelectingEngagmentType(Engagementype){
        return cy.xpath("//button[@class='cpf-box cpf-card ']/div/b[contains(text(),'"+Engagementype+"')]", { timeout: 7000 });
    }


} export default EngagementComponentObjects