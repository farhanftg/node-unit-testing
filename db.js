
var mysql = require('mysql');
var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'mysql-api'
});


global.db = db;

module.exports = {
    connect: function(){
        return new Promise(function(resolve , reject){
            db.connect(function(err){
                if(!err) {
                    resolve();
                } else {
                    console.log("Error connecting database ... nn");
                    reject(err);
                }
            });
        });
    }
};
module.exports.connect();