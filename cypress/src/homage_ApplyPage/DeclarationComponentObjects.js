class DeclarationComponentObjects{

    GetBackgroundButton(firstname, lastname){
        return cy.xpath("(//button[@class='cpf-box cpf-btn '])[4]",{timeout:7000});
    }

}export default DeclarationComponentObjects