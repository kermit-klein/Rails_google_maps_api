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
    cy.get("body").click();

    cy.get("#place_latitude").should("have.value", 39.9333635);
    cy.get("#place_longitude").should("have.value", 32.8597419);
    cy.get('input[name="commit"]').click();
    cy.get("#notice").should("contain", "Place was successfully created.");
  });

  xit("visits home page and creates place by entering coords", () => {
    cy.visit("localhost:3000/places");
    cy.get("a").contains("New Place").click();
    cy.get("#place_latitude").type("39.9333635");
    cy.get("#place_longitude").type("32.8597419");
    cy.get("#place_name").type("someRandomPlaceOnEarth");
    cy.get('input[name="commit"]').click();
    cy.get("#notice").should("contain", "Place was successfully created.");
  });

  xit("visits home page and creates place by dragging marker", () => {
    cy.visit("localhost:3000/places");
    cy.get("a").contains("New Place").click();
    cy.get(
      'img[src="https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2.png"]'
    )
      .eq(1)
      .trigger("mousedown", { which: 1 })
      .wait(1000)
      .trigger("mousemove", { clientX: 50, clientY: 50 })
      .wait(1000)
      .trigger("mouseup", { force: true });
    cy.get("#place_name").type("someRandomPlaceInStockholm");
    cy.get("#place_latitude").should("not.have.value", "59.334591");
    cy.get("#place_longitude").should("not.have.value", "18.06324");
    cy.get('input[name="commit"]').click();
  });
});
