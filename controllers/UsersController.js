module.exports = {
    getList : function(req , res){
        db.query('SELECT * from users', function(err, rows, fields) {
            if (!err)
            res.status(200).json(rows);
            else
            res.status(400).json(err);
        });
    
    },
    add : function(req , res){
        let values = [
            req.body.username,
            req.body.password,
            req.body.subject,
            req.body.class,
        ]
        db.query('INSERT into users(username,password,subject,class) values (?) ',[values] , function(err , result){
            if(!err){
                res.status(200).json(result.affectedRows);
            }else{
                res.status(400).json(err);
            }
        });
    },
    login : function(req , res){
        db.query('SELECT username,subject,class from users where username = ? AND password = ? LIMIT 1',
        [req.body.username , req.body.password] , function(err , rows , fields){
            if(!err){
                res.status(200).json(rows.length ? rows[0]: {});
            }else{
                res.status(400).json(err);
            }
        });
    }
}