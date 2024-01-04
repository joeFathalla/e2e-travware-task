describe("Blog App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("get default blog list", () => {
    cy.get(".blog-list h2").first().should("have.text", "My First blog");
    cy.url().should("equal", "http://localhost:3000/");
  });
  it("Add new blog", () => {
    cy.get("#create-new-blog").click();
    cy.get("#title").type("test title");
    cy.get("#content").type("test content");
    cy.get("#submit-button").click();
    cy.get(".blog-list h2").last().should("have.text", "test title");
    cy.url().should("equal", "http://localhost:3000/");
  });
  it("update and delete test blog ", () => {
    cy.get(".blog-list a").last().click();
    cy.wait(2000);
    cy.get(".blog-single-title").should("have.text", "test title");
    cy.get(".blog-single-content").should("have.text", "test content");
    cy.get("#update-button").click();
    cy.wait(2000);
    cy.get("#title").type(" 2");
    cy.get("#content").type(" 2");
    cy.get("#submit-button").click();
    cy.wait(2000);
    cy.get(".blog-single-title").should("have.text", "test title 2");
    cy.get(".blog-single-content").should("have.text", "test content 2");
    cy.get("#delete-button").click();
    cy.wait(2000);
    cy.get("#cancel-delete").click();
    cy.get("#delete-button").click();
    cy.get("#confirm-delete").click();
    cy.wait(2000);
    cy.visit("http://localhost:3000/");
    cy.get(".blog-list li")
      .should("have.length", 2)
      .should("not.have.text", "test title");
  });
});
