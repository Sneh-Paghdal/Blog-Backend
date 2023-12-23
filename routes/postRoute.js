const express = require('express');
const router = express.Router();
const { createPost, showPost, showSinglePost, deletePost, updatePost, addComment, addLike, removeLike } = require('../controllers/postController.js');
// const { isAuthenticated, isAdmin } = require('../middleware/auth.js');
const auth = require('../middlewares/auth.js');

//blog routes
router.post('/post/create', auth.isAuthenticated, auth.isAdmin, createPost);
router.get('/posts/show', showPost);
router.get('/post/:id', showSinglePost);
router.delete('/delete/post/:id', auth.isAuthenticated, auth.isAdmin, deletePost);
router.put('/update/post/:id', auth.isAuthenticated, auth.isAdmin, updatePost);
router.put('/comment/post/:id', auth.isAuthenticated, addComment);
router.put('/addlike/post/:id', auth.isAuthenticated, addLike);
router.put('/removelike/post/:id', auth.isAuthenticated, removeLike);


module.exports = router;