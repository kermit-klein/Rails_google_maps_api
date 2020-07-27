describe("User can", () => {
  beforeEach(() => {
    cy.cleanAndSeedDatabase();
  });

  afterEach(() => {
    cy.cleanDatabase();
  });

  it("visits home page and see list of places", () => {
    cy.visit("localhost:3000/places");
    cy.get("table").contains("Mount Rushmore");
    cy.get("table").contains("Hiroshima");
    cy.get("table").contains("Dubai");
  });
});
