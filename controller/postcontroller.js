const Posts = require("../models/postModel");
const Items = require("../models/item");
const asyncHandler = require("express-async-handler");
const mongoose = require('mongoose');


//@description           Fetch all posts
//@route                 GET /posts
//@access                Public 
const getPosts = asyncHandler(async (req, res) => {
  const invoice = await Posts.find();
  res.json(invoice);
});


//@description            Create new Post
//@route                  POST  /posts
//@access                 Private
const createPost = asyncHandler(async (req, res) => {
  const invoice = await new Posts({
    item : mongoose.Types.ObjectId(),
    place_of_supply : req.body.place_of_supply,
    mode_of_payment : req.body.mode_of_payment,
    due_date : req.body.due_date,
    status : req.body.status
  });


  const savedInvoice = await invoice.save();
  res.json(savedInvoice);
});


//@description            Create new Item
//@route                  POST  /posts
//@access                 Private
const createItem = asyncHandler(async (req, res) => {
  const Item = await new Items({
    item : req.params.id,
    hours_of_work : req.body.hours_of_work,
    expenses : req.body.expenses,
    labor : req.body.labor
  });
  
  const savedItem = await Item.save();

  const post = await Posts.findById(req.params.id);
  post.items.push(Item);
  const result = await post.save();
  res.json(result);

});



//@description            Fetch single post
//@route                  GET  /posts/:id
//@access                 Public
const getPostById = asyncHandler(async (req, res) => {
  const invoice = await Posts.findById(req.params.id);
  res.json(invoice);
});




//@description            Edit the post 
//@route                  PATCH  /posts/:id
//@access                 Private
const updatePost = asyncHandler(async (req, res) => {
  const updatedInvoice = await Posts.updateOne(
    { _id: req.params.id },
    { $set: { status: req.body.status } }
  );
  res.json(updatedInvoice);
});


module.exports = {
  getPosts,
  createPost,
  createItem,
  getPostById,
  updatePost
};