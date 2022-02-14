const express = require("express");
const router = express.Router();

const {
  getPosts,
  createPost,
  createItem,
  getPostById,
  updatePost
} = require("../controller/postcontroller");


//Get posts from db
router.get("/", getPosts);

//save posts into db
router.post("/", createPost);

//Add items to invoice
router.post("/:id", createItem);

//Get post by id
router.get("/:id", getPostById);

//Update a post
router.patch("/:id", updatePost);


module.exports = router;