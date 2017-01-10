var connection = require('../connection');
var mysql = require('mysql');
var error = require('./error');

function Pokemon() {
    this.getAll = function (res) {
        connection.acquire(function (err,con) {
            if (err) { return error.connection(res) }
            var sql = "SELECT * FROM pokemon";
            con.query(sql, function(err, result) {
                if (err) { return error.sql(res) }
                res.send(result);
                con.release();
            })
        })
    }
    this.getByID = function (id, res) {
        connection.acquire(function (err, con) {
            if (err) { return error.connection(res) }
            var sql = 'SELECT * FROM pokemon WHERE nationalDexID = ?';
            var inserts = [id];
            con.query(sql, inserts, function (err, result) {
                if (err) { return error.sql(res) }
                res.send(result);
                con.release();
            })
        })
    }
    this.add = function(req, res) {
        connection.acquire(function (err, con) {
            if (err) { console.log(err); return error.sql(res) }
            var sql = `
                INSERT INTO pokemon (
                    nationalDexID,
                    name,
                    levelRate,
                    catchRate,
                    preevolution,
                    image
                ) VALUES (
                    ?,?,?,?,?,?
                )
            `;
            var inserts = [
                req.nationalDexID,
                req.name,
                req.levelRate,
                req.catchRate,
                req.preevolution,
                req.image
            ];
            con.query(sql, [req], function (err, result) {
                if (err) { return error.sql(res) }
                res.send(result);
                con.release();
            })
        })
    }
}

module.exports = new Pokemon();