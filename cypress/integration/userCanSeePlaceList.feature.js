describe("User can", () => {
  beforeEach(() => {
    cy.cleanAndSeedDatabase();
  });

  afterEach(() => {
    cy.cleanDatabase();
  });

  it("visits home page and see list of places", () => {
    cy.visit("localhost:3000/places");
    cy.get("table").should("contain", "Mount Rushmore");
    cy.get("table").should("contain", "Hiroshima");
    cy.get("table").should("contain", "Dubai");
  });
});
