var mysql = require('mysql');
var express = require('express');
var router = express();
var sql_connection=require('../models/sqlModel');

router.get('/alldata', function (req, res) {
    var sql = "SELECT * FROM ip_table";

    sql_connection.query(sql, function (err, result) {
        if (err) {
            res.send(err);
            console.log('[SELECT ERROR] - ', err.message);
            return;

        }
        res.send(result);
        result.forEach(element => {
            console.log(element);
        });
    });
});
module.exports = router;