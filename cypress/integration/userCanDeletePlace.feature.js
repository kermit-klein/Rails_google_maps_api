describe("User can", () => {
  beforeEach(() => {
    cy.cleanAndSeedDatabase();
  });

  afterEach(() => {
    cy.cleanDatabase();
  });

  it("visits home page and deletes place", () => {
    cy.visit("localhost:3000/places");
    cy.get("#delplace-1").click();
    cy.get("#notice").should("contain", "Place was successfully destroyed.");
    cy.get("table").should("not.contain", "Mount Rushmore");
  });
});
