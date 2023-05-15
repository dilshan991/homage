require('cypress-xpath');

class RoleComponentsObjects{

    GetDiffOpportunitiesExpand(){
        return cy.xpath("//button/span[@class='job-desc-popup-text']", { timeout: 7000 });
    }

    GetOpportunityType(oppType){
        return cy.xpath("//button[@class='cpf-box cpf-card ']/div/b[contains(text(),'"+oppType+"')]", { timeout: 7000 });
    }

} export default RoleComponentsObjects