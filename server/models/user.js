const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    }
})

const user = mongoose.model('Users', UserSchema)
module.exports = user
