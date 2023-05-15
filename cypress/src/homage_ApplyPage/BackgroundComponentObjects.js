class BackgroundComponentObjects{

GetBackgroundButton(backgroundCheck){
    return cy.xpath("(//button[@class='cpf-box cpf-btn '])[4]",{timeout:7000});
}

Getreferralinput(){
    return cy.xpath("//input[@id='referral']",{timeout:7000});
}

GetHearAboutJob(){
    return cy.xpath("//div[@id='source']",{timeout:7000});
}

GetHearAboutJobOption(datavalue){
    return cy.xpath("//li[@data-value='"+datavalue +"']",{timeout:7000});
}

}export default BackgroundComponentObjects