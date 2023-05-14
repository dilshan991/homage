require('cypress-xpath');

class RoleComponentsObjects{

    GetExperienceYesButton(){
        return cy.xpath("//div[@class='h yes-no-sg']/button[contains(text(),'Yes')]",{timeout:7000});
    }

    GetExperienceNoButton(){
        return cy.xpath("//div[@class='h yes-no-sg']/button[contains(text(),'No')]",{timeout:7000});
    }

    GetExperienceLess1year(){
        return cy.xpath("//button[@class='cpf-box cpf-border ']/h3[contains(text(),'Less than 1')]",{timeout:7000});
    }

    GetDoctorRoleApply(){
        return cy.xpath("//button[@class='cpf-box cpf-border justify-between ']/div/h3/span[contains(text(),'Doctor')]",{timeout:7000});
    }

} export default RoleComponentsObjects
