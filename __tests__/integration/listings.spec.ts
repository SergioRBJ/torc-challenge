import request from "supertest";
import app from "../../src/app";

describe("GET /listings", () => {
  it("should return an empty array", async () => {
    const response = await request(app).get(`/listings`).expect(200);

    expect(response.body).toEqual([]);
  });

  it("should return a list of existing listings", async () => {
    const listingMock = {
      title: "pen",
      price: 12,
      description: "to write something",
    };

    await request(app).post("/listings").send(listingMock);

    const response = await request(app).get("/listings").expect(200);

    expect(response.body[0]).toHaveProperty("title");
    expect(typeof response.body[0].title).toBe("string");
    expect(response.body[0]).toHaveProperty("price");
    expect(typeof response.body[0].price).toBe("number");
  });
});

describe("POST /listings", () => {
  it("should return an bad request error for missing title", async () => {
    const listingMock = {
      price: 12,
      description: "to write something",
    };

    const response = await request(app)
      .post("/listings")
      .send(listingMock)
      .expect(400);

    console.log(response);

    expect(response.text).toEqual("title is required.");
  });
});
