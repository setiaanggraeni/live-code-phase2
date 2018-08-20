const User = require('../models/user')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config()
const Product = require('../models/product')

class UserController{
  static register(req, res){
    let {username, password} = req.body
    var salt = bcrypt.genSaltSync(8);
    var hash = bcrypt.hashSync(password, salt);
    User.findOne({username : username})
    .then(user => {
      if(!user){
        User.create({
          username, password: hash
        })
        .then(newUser => {
          res.status(201).json({
            success: true,
            message: `Account ${username} registered`
          })
        })
        .catch(err => {
          res.status(400).json(err.message)
        })
      }
    })
  }

  static requestToken(req, res){
    var {username, password} = req.body
    User.findOne({username : username})
    .then(user =>{
      if(user !== null){
        let compare = bcrypt.compareSync(password, user.password)
        if(compare){
          jwt.sign({ id: user._id, username: user.username}, process.env.secretKey, function(err, token) {
            res.status(201).json({
              token: token
            })
          });
        } else{
          res.json('Wrong username/password!')
        }
      } else {
        console.log('Username not found, please kindly for register!')
      }
    })
    .catch(err => {
      res.status(400).json(err.message)
    })
  }

  static items(req, res){
    let token = req.headers.token
    let {name, price, stock, tags} = req.body
    if(token){
      let decoded = jwt.verify(token, process.env.secretKey)
      Product.create({
        name, price, stock, tags, user: decoded.id
      })
      .then(newProduct => {
        res.status(201).json(newProduct)
      })
      .catch(err => {
        res.status(400).json(err.message)
      })
    }
  }

  static query(req, res){
    Product.find({$or: [{name: new RegExp(req.query.name, 'i')},
                        {price: new RegExp(req.query.price_start, 'i')},
                        {tags: new RegExp(req.query.tag, 'i')},
                        {name: new RegExp(req.query.name&price_start, 'i')},
                        {price: new RegExp(req.query.name&price_start, 'i')}
                      ]
    })
    .then(products => {
      res.status(201).json(products)
    })
    .catch(err => {
      res.status(400).json(err.message)
    })
  }

  static getAllItems(req, res){
    Product.find({})
    .then(products => {
      res.status(201).json(products)
    })
    .catch(err => {
      res.status(400).json(err.message)
    })
  }
}

module.exports = UserController