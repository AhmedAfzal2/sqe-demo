const request = require("supertest");
const app = require("./app");

test("GET /add returns correct result", async () => {
  const res = await request(app).get("/add?a=2&b=3");
  expect(res.body.result).toBe(5);
});
