var bodyparser = require('body-parser');
var jwt = require('jsonwebtoken');
var connection = require('./connection');
var bcrypt = require('bcrypt-nodejs');
var pokemon = require('./models/pokemon');

module.exports = {
    configure: function (app) {
        //pokemon
        app.get('/pokemon', function (req, res) {
            pokemon.getAll(res);
        })
        app.get('/pokemon/:id', function (req, res) {
            pokemon.getByID(req.params.id, res);
        })
        app.post('/pokemon', function (req, res) {
            pokemon.add(req.body, res);
        })
    }
}