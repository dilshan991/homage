
class HeaderComponentObjects {

    GetHeaderImage() {
      return cy.xpath("//div[@class='cpf-graphic']/img", { timeout: 7000 });
    }

    GetSelectLocation() {
      return cy.xpath("//div[@id='location']", { timeout: 7000 });
      
    }

} export default HeaderComponentObjects