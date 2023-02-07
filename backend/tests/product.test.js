const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../app");
//const server = require("../server");

const { connectDB, disconnectDB } = require('../mockDB');

const dotenv = require("dotenv");

dotenv.config();
//actual db connection
  // beforeEach(async () => {
      
  //     await mongoose.connect("mongodb://localhost:27017/mevn2022");
  // });

  // afterEach(async () => {
  //     await mongoose.connection.close();
  // })
  
//memory mock db connection
 beforeAll(() => {
    connectDB();
  });

  afterAll(() => {
    disconnectDB();
    //server.close();
  });

describe("GET /api/products/:id", () => {
    it("should return a product", async () => {
      const res = await request(app).get(
        "/api/products/63c65e41be40b5a4cb8c4182" //checks as pass even if arbitrary number id
      );
      expect(res.statusCode).toBe(200);
    });
  });

describe("POST /api/products", () => {
    it("should create a product", async () => {
      const res = await request(app).post("/api/products").send({
        name: "Product 2",
        price: 1009,
        description: "Description 2",
      });
      expect(res.statusCode).toBe(201);
      //console.log(res)
      expect(res.body.name).toBe("Product 2");
    });
  });

