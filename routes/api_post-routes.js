const express = require ('express');
const router = express.Router();
const {
    getPost, 
    deletePost,
    editPost,
    getPosts,
    addPost
  } = require('../controllers/api_post_controller');

  //get all
  router.get('/api/posts', getPosts);
  //add new
  router.post('/api/add-post', addPost);
  //get by id
  router.get('/api/posts/:id', getPost);
  //delete by id
  router.delete('/api/posts/:id', deletePost);
  //update by id
  router.put('/api/edit/:id', editPost);
  
  
  
  

module.exports = router;