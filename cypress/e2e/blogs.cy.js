describe("get blogs test", () => {
  it("Confirms blogs ", () => {
    cy.visit("http://localhost:3000");
    cy.request("GET", "api/blogs").as("blogs");
    cy.get("@blogs").should((response) => {
      expect(response.status).to.eq(200);
      expect(response).to.have.property("headers");
      expect(response.body.blogs).to.have.length(2);
    });
  });
});

describe("get blog test", () => {
  it("Confirms blogs ", () => {
    cy.visit("http://localhost:3000");
    cy.request("GET", "api/blogs/0").as("blog");
    cy.get("@blog").should((response) => {
      expect(response.status).to.eq(200);
      expect(response).to.have.property("headers");
      expect(response.body.blog).to.have.property("title", "My First blog");
    });
  });
});
