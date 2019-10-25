var mysql = require('mysql');
let pool  = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'students',
    connectTimeout : 5000,
    //port:3306,
    //multipleStatements: true//允许多条sql同时执行
});
//将数据库的异步操作，封装在一个Promise中
let query = function( sql, values ) {
    return new Promise(( resolve, reject ) => {
      pool.getConnection(function(err, connection) {
        if (err) {
          reject( err )
        } else {
          connection.query(sql, values, ( err, rows) => {
            if ( err ) {
              reject( err )
            } else {
              resolve( rows )
            }
            connection.release()
          })
        }
      })
    })
}

let find = function(tableName,obj){
    let sql = `SELECT * FROM ${tableName}`
    query()
}

  module.exports = { query }
