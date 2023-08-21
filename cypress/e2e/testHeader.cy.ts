describe("Header Test", () => {
  beforeEach(() => {
    // Navigate to the page where the header is located
    cy.visit("localhost:3000"); // Replace with your actual URL
  });

  it("Checks if the logo is present", () => {
    cy.get('img[alt="logo"]').should("be.visible");
  });

  it("Checks if the search button is present and clickable", () => {
    cy.get("button").contains("Search characters").should("be.visible").click();
    // You can add further assertions here to verify the search functionality
  });

  it("Checks if the theme button is present", () => {
    cy.get('div[aria-label="themeBtn"]').should("be.visible");
  });

  it("Checks if the GitHub link is correct", () => {
    cy.get('a[href="https://github.com/Cypherfelix/harry-potter-app"]').should(
      "be.visible"
    );
  });

  //check if a dropdown is present when the user clicks on theme
  it("Checks if the dropdown is present when the user clicks on theme", () => {
    cy.get('div[aria-label="themeBtn"]').click();
    cy.get("#themeDropDown").should("be.visible");
  });

  it("Checks if the dropdown is present when the user clicks on theme", () => {
    cy.get('div[aria-label="themeBtn"]').click();
    cy.get('div[aria-label="themeBtn"]').click();
    //No theme dropdown should be found
    cy.get("#themeDropDown").should("not.exist");
  });

  // Add more tests as needed for other elements within the header
});
