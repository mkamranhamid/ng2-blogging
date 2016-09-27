var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    age: Number,
    email: String,
    company: [],
    products: [],
    users: [],
    role: String,
    date: { type: Date, default: Date.now },
    token: String
})