const express = require('express');
const router = require('./router/router');
const app = express()
const path = require('path')



app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(express.static('public'))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')
app.use('/home', router);




app.listen(3000, () => {
    console.log('rota funcionando')
})




