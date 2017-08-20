module.exports = function (request, response, next){
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH')
    response.header('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept')
    next()
}