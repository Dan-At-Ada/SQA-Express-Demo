const express = require('express')
const path = require('path')
const { sequelize } = require('./models/index')
const blogRoutes = require('./route/blog')

const app = express()
const port = 3000; // set this up through .env

app.set('views', path.join(__dirname, 'views'))
console.log(path.join(__dirname, 'views'))

app.set('view engine', 'pug')

app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', blogRoutes)

// asyncronous 
sequelize.sync().then(
    () => {
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`)
        })
    }
)

