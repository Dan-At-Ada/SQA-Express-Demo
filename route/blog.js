const express = require('express')
const router = express.Router();
const { BlogPost } = require('../models')

router.get('/', async (req, res) => {
    const posts = await BlogPost.findAll()
    res.render('index', {
        title: "Blog Posts",
        posts: posts
    })
})

router.get('/create', async (req, res) => {
    res.render('create', {
        title: "Create Post"
    })
})

router.post('/create', async (req, res) => {
    BlogPost.create(req.body)
    console.log(req.body)
    res.redirect('/')
})

router.get('/post/:id', async (req, res) => {
    const post = await BlogPost.findByPk(req.params.id);
    if (post) {
        res.render('post', { title: post.title, post })
    } else {
        res.status(404)
    }
}


)


module.exports = router;

// /create