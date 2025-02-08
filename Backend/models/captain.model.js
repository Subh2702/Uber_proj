const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const captainSchema =new mongoose.Schema({
    fullname:{
        firstname: {
            type: String,
            required: true,
            minlength: [3,'Firstname must be at least 3 characters'],
        },
        lastname: {
            type: String,
            minlength: [3,'Lastname must be at least 3 characters'],
        },
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: true,
        minlength: [6, 'Password must be at least 6 characters long']
    },
    socketId: {
        type: String
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    },
    vehicle: {
        color: {
            type: String,
            required: true
        },
        plateNumber: {
            type: String,
            required: true
        },
        capacity: {
            type: Number,
            required: true
        },
        vehicleType: {
            type: String,
            required: true,
            enum: ['bus', 'car', 'bike']
        },
    },
    location:{
        lat: {
            type: Number,
        },
        lng: {
            type: Number,
        }
    }
});

captainSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
}

captainSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}

captainSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password, 10);
}

const captainModel = mongoose.model('captain', captainSchema);
module.exports = captainModel;