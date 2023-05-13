
class HeaderComponentObjects {

    GetHeaderImage() {
      return cy.xpath("//div[@class='cpf-graphic']/img", { timeout: 5000 });
    }

    GetSelectLocation() {
      return cy.xpath("//div[@id='location']", { timeout: 5000 });
      
    }

} export default HeaderComponentObjects