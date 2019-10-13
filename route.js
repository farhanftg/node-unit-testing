var express  = require('express');
var router = express.Router();
var UsersController = require('./controllers/UsersController');

router.get('/user-list' , (req, res) => {
    UsersController.getList(req , res);
})

router.post('/add' , (req , res) => {
    UsersController.add(req , res);
})

router.post('/login' , (req , res) => {
    UsersController.login(req , res);
})
module.exports = router;