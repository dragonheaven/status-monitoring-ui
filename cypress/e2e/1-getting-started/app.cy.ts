describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('displays three server items by default', () => {
    cy.get('[data-testid=table-row]').should('have.length', 3)

    cy.get('[data-testid=table-row]').first().children().first().should('have.text', 'My Server 1');
    cy.get('[data-testid=table-row]').last().children().first().should('have.text', 'My Server 3');
  })

  it('can add new server', () => {
    cy.get('[data-testid=create-server]').click()

    cy.get('[placeholder=Name]').type('New Server');
    cy.get('[placeholder=CPU]').type('24GHZ');
    cy.get('[placeholder=Memory]').type('64GHZ');
    cy.get('[data-testid=toggle]').click();
    cy.get('[data-testid=select-option]').first().click();
    cy.get('[data-testid=save-button]').click();

    cy.get('[data-testid=table-row]')
      .should('have.length', 4)
      .last()
      .children()
      .first()
      .should('have.text', 'New Server');
  })

  it('can edit server', () => {
    cy.get('[data-testid=edit-server]').first().click();
    cy.get('[placeholder=Name]').should('have.value', 'My Server 1');
    cy.get('[placeholder=CPU]').should('have.value', '7 GHz');
    cy.get('[placeholder=Memory]').should('have.value', '1 GB');


    cy.get('[placeholder=Name]').clear().type('Update Server');
    cy.get('[placeholder=CPU]').clear().type('24GHZ');
    cy.get('[placeholder=Memory]').clear().type('64GHZ');
    cy.get('[data-testid=toggle]').click();
    cy.get('[data-testid=select-option]').first().click();
    cy.get('[data-testid=save-button]').click();

    cy.get('[data-testid=table-row]')
      .first()
      .children()
      .first()
      .should('have.text', 'Update Server');
  })

  it('can delete server', () => {
    cy.get('[data-testid=delete-server]').first().click();

    cy.get('[data-testid=table-row]').should('have.length', 2);
  })

  it('can filter server', () => {
    cy.get("[placeholder='Search servers...']").clear().type('server 1');

    cy.get('[data-testid=table-row]').should('have.length', 1);
  })

  it('can view detail', () => {
    cy.get("[data-testid=view-server]").first().click();

    cy.contains('My Server 1').should('exist');
    cy.contains('7 GHz').should('exist');
    cy.contains('1 GB').should('exist');
    cy.contains('Ok').should('exist');
  })

  it('can paginate servers', () => {
    for (let i = 0; i < 10; i ++) {
      cy.get('[data-testid=create-server]').click()

      cy.get('[placeholder=Name]').type(`New Server ${i}`);
      cy.get('[placeholder=CPU]').type('24GHZ');
      cy.get('[placeholder=Memory]').type('64GHZ');
      cy.get('[data-testid=toggle]').click();
      cy.get('[data-testid=select-option]').first().click();
      cy.get('[data-testid=save-button]').click();
    }

    cy.get('[data-testid=table-row]').should('have.length', 10);
    cy.get('[data-testid=nextButton]').click();
    cy.get('[data-testid=table-row]').should('have.length', 3);
    cy.get('[data-testid=prevButton]').click();
    cy.get('[data-testid=table-row]').should('have.length', 10);
    cy.get('[data-testid=nextButton]').click();
    cy.get("[placeholder='Search servers...']").clear().type('server 1');

    cy.get('[data-testid=table-row]').should('have.length', 2);
  })
})
