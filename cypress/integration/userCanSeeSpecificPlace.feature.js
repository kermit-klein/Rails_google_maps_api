describe("User can", () => {
  beforeEach(() => {
    cy.cleanAndSeedDatabase();
  });

  afterEach(() => {
    cy.cleanDatabase();
  });

  it("visits home page and clicks show", () => {
    cy.visit("localhost:3000/places");
    cy.get("#place-1").click();
    cy.get("#name").contains("Mount Rushmore");
    cy.get("#latitude").contains("43.87910249999999");
    cy.get("#longitude").contains("-103.4590667");
  });
});
