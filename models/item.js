const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
    id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Posts'
    },

    hours_of_work : {
        type : String,
        required : true
    },
    expenses : {
        type : String,
        required : true
    },
   
    material :{
        type: String,
        required : true
    },

    labor : {
        type : String,
        required : true
    }
},
    { timestamps : true }
);

const Items =  mongoose.model('Items',ItemSchema);

module.exports = Items
