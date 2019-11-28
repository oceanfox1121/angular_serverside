var express = require('express');
var app = express();
const db = require('../db')
const utils = require('../utils')
const router = express.Router()

router.get('/',(request,response) =>{
    const connection = db.connect();
    const statement = 'select * from employee'
    connection.query(statement,(error,data) =>{
        connection.end()
        response.send(utils.creatResult(error,data))
       
    })
})


router.post('/',(request,response) =>{
    const connection = db.connect();
    const {name,address,email} = request.body
    const statement = `insert into employee (name,email,address) values('${name}','${address}','${email}')` 
    connection.query(statement,(error,data) =>{
        connection.end()
        response.send(utils.creatResult(error,data))
       
    })
})


router.put('/:id',(request,response) =>{
    const connection = db.connect();
    const {name,address,email} = request.params.id
    const statement = `update employee set name ='${name}',address = '${address}',address = '${email} where id = '${id}')` 
    connection.query(statement,(error,data) =>{
        connection.end()
        response.send(utils.creatResult(error,data))
       
    })
})


router.delete('/:id',(request,response) =>{
    const connection = db.connect();
    const {name,address,email} = request.params.id
    const statement = `delete from employee where id = '${id}')` 
    connection.query(statement,(error,data) =>{
        connection.end()
        response.send(utils.creatResult(error,data))
       
    })
})


module.exports = router