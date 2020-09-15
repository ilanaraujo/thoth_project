const mongo = require('mongodb').MongoClient

// Middleware to connect foreach request
exports.connectDB = function (req, res, next){
    //conectando o banco
    
    const dbUrl = process.env.MONGO_CONNECTION_STR || 'mongodb://localhost/YuGiOh'

    mongo.connect(dbUrl, function (err, client) {
        if (err) {
            console.log(err)
            res.status(501).json(err)
            return 
        }
        res.database = client.db('YuGiOh').collection("Cards")
        req.databaselogin = client.db('ufrj').collection("login")

        next()
    })
}
