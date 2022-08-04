import dbConnect from "../../../utils/mongo";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  const { method } = req;
  console.log("kappu69");
  const db = await dbConnect();
  console.log(db);
  //   console.log(global.mongoose);
  console.log("kalp69");
  if (method === "GET") {
    try {
      // const product = Product.find({title:'pizza1'})
      const products = await Product.find();
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "POST") {
    try {
      // Product.insertOne()
      const product = await Product.create(req.body);
      //   await product.save();
      res.status(201).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
