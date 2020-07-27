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
    cy.get("#name").should("contain", "Mount Rushmore");
    cy.get("#latitude").should("contain", "43.87910249999999");
    cy.get("#longitude").should("contain", "-103.4590667");
  });
});
