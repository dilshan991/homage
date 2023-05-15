require('cypress-xpath');

class RoleComponentsObjects{

    GetExperienceButton(experience){
        return cy.xpath("//div[@class='h yes-no-sg']/button[contains(text(),'"+experience+"')]",{timeout:7000});
    }


    GetExperienceDuration(duration){
        return cy.xpath("//button[@class='cpf-box cpf-border ']/h3[contains(text(),'"+duration+"')]",{timeout:7000});
    }

    GetApplierRoleDesignation(designation){
        return cy.xpath("//button[@class='cpf-box cpf-border justify-between ']/div/h3/span[contains(text(),'"+designation+"')]",{timeout:7000});
    }

} export default RoleComponentsObjects
