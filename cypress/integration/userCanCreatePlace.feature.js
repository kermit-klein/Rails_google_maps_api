describe("User can", () => {
  beforeEach(() => {
    cy.cleanAndSeedDatabase();
  });

  afterEach(() => {
    cy.cleanDatabase();
  });

  it("visits home page and creates place by typing name", () => {
    cy.visit("localhost:3000/places");
    cy.get("a").contains("New Place").click();
    cy.get("#place_name").type("Ankara");
    cy.get("#place_latitude").should("contain", "39.9333635");
    cy.get("#place_longitude").should("contain", "32.8597419");
    cy.get('input[name="commit"]').click();
    cy.get("#notice").should("contain", "Place was successfully created.");
  });

  it("visits home page and creates place by entering coords", () => {
    cy.visit("localhost:3000/places");
    cy.get("a").contains("New Place").click();
  });

  it("visits home page and creates place by dragging marker", () => {
    cy.visit("localhost:3000/places");
    cy.get("a").contains("New Place").click();
  });
});
