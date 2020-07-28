describe("User can", () => {
  beforeEach(() => {
    cy.cleanAndSeedDatabase();
  });

  afterEach(() => {
    cy.cleanDatabase();
  });

  it("visits home page and edits place", () => {
    cy.visit("localhost:3000/places");
    cy.get("#editplace-1").click();
    cy.get("#place_name").clear().type("Ankara");
    cy.get("body").click();
    cy.get("#place_latitude").should("have.value", 39.9333635);
    cy.get("#place_longitude").should("have.value", 32.8597419);
    cy.get('input[name="commit"]').click();
    cy.get("#notice").should("contain", "Place was successfully updated.");
  });
});
