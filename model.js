const mongoose = require('mongoose');
const schema = mongoose.Schema;
const obj = {
    type: String,
    required: true,
    trim: true,
};

const userSchema = new schema(
    {
        name: obj,
        email: {
            type: String,
            trim: true,
            required: true,
            unique: true,
            lowercase: true,
        },

        phoneNo: {
            type: Number,
            required: true,
            trim: true,
        },
        address: obj,
        status: obj
    },

);

module.exports = mongoose.model('User', userSchema);