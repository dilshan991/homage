require('cypress-xpath');

class BasicComponentObjects{

    GetFirstName(){
        return cy.xpath("//*[@id='firstName']",{timeout:7000});
    }

    GetLastName(){
        return cy.xpath("//*[@id='lastName']",{timeout:7000});
    }

    GetEmailAddress(){
        return cy.xpath("//*[@id='email']",{timeout:7000});
    }

    GetPhoneNumber(){
        return cy.xpath("//*[@id='phone']",{timeout:7000});
    }

    GetLegalAgeYesButton(){
        return cy.xpath("//*[@class='cpf-loc-label legalAge']/div/button[contains(text(),'Yes')]",{timeout:7000});
    }

    GetLegalAgeNoButton(){
        return cy.xpath("//*[@class='cpf-loc-label legalAge']/div/button[contains(text(),'No')]",{timeout:7000});
    }

    GetResideSingaYesButton(){
        return cy.xpath("//div[@id='countrysg']/button[contains(text(),'Yes')]",{timeout:7000});
    }

    GetResideSingaNoButton(){
        return cy.xpath("//div[@id='countrysg']/button[contains(text(),'No')]",{timeout:7000});
    }


} export default BasicComponentObjects