describe("User can", () => {
  beforeEach(() => {
    cy.cleanAndSeedDatabase();
  });

  afterEach(() => {
    cy.cleanDatabase();
  });

  xit("visits home page and creates place by typing name", () => {
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
    cy.get("#place_latitude").clear().type(39.9333635);
    cy.get("#place_longitude").clear().type(32.8597419);
    cy.get("#place_name").type("someRandomPlaceOnEarth");
    cy.get('input[name="commit"]').click();
    cy.get("#notice").should("contain", "Place was successfully created.");
  });

  it("visits home page and creates place by dragging marker", () => {
    cy.visit("localhost:3000/places");
    cy.get("a").contains("New Place").click();
    cy.get(
      'img[src="https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2.png"]'
    )
      .eq(1)
      .parent()
      .trigger("mousedown")
      .wait(1500)
      .trigger("mousemove", {
        clientX: 80,
        clientY: 90,
        screenX: 80,
        screenY: 90,
        pageX: 80,
        pageY: 90,
      })
      .trigger("mouseup");

    // cy.get(
    //   'img[src="https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2.png"]'
    // )
    //   .eq(1)
    //   .parent()
    //   .move({ x: 55, y: 90 }, { force: true });
    cy.get("#place_name").type("someRandomPlaceInStockholm");
    cy.get("#place_latitude").should("not.have.value", 59.334591);
    cy.get("#place_longitude").should("not.have.value", 18.06324);
    cy.get('input[name="commit"]').click();
  });
});
