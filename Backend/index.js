const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Configuration
const uri =
  "mongodb+srv://mayachakraborty:newpass@cluster0.zpgim.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Connect to MongoDB
async function connectDB() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB!");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    process.exit(1);
  }
}
connectDB();

// Database Collection
const merchCollection = client.db("Ghibli").collection("merchs");

// Root Route
app.get("/", (req, res) => {
  res.send("Hello from Ghibli API!");
});

/** 📌 POST - Add a New Product **/
app.post("/api/products", async (req, res) => {
  try {
    const {
      productName,
      imageURL,
      category,
      productDescription,
      price,
      purchaseURL,
    } = req.body;

    // Validate required fields
    if (!productName || !imageURL || !category || !productDescription || !price || !purchaseURL) {
      return res.status(400).json({ error: "Missing required fields!" });
    }

    // Insert product into MongoDB
    const result = await merchCollection.insertOne({
      productName,
      imageURL,
      category,
      productDescription,
      price,
      purchaseURL,
    });

    res.status(201).json({
      message: "Product added successfully",
      productId: result.insertedId,
    });
  } catch (error) {
    console.error("❌ Error adding product:", error);
    res.status(500).json({ error: "Failed to add product" });
  }
});

/** 📌 GET - Fetch Top 5 Newest Products **/
app.get("/api/products", async (req, res) => {
  try {
    const query = req.query?.category ? { category: req.query.category } : {};
    const products = await merchCollection.find(query)
      .sort({ _id: -1 }) // Sort by newest first
      .limit(5) // Limit to top 5
      .toArray();

    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});


/** 📌 GET - Fetch a Single Product by ID **/
app.get("/api/products/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const product = await merchCollection.findOne({ _id: new ObjectId(id) });

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch product" });
  }
});

/** 📌 PATCH - Update a Product **/
app.patch("/api/products/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = req.body;
    const filter = { _id: new ObjectId(id) };
    const updateDoc = { $set: { ...updateData } };

    const result = await merchCollection.updateOne(filter, updateDoc);
    if (result.matchedCount === 0) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json({ message: "Product updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to update product" });
  }
});

/** 📌 DELETE - Remove a Product **/
app.delete("/api/products/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const filter = { _id: new ObjectId(id) };
    const result = await merchCollection.deleteOne(filter);

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete product" });
  }
});

// Start Server
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
