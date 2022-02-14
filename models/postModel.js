const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    place_of_supply : {
        type : String,
        required : true
    },
    mode_of_payment : {
        type : String,
        required : true
    },

    due_date : {
        type : String,
        required : true
    },
   
    status :{
        type: String,
        required : true
    },

    items : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Items'
    }]
},
    { timestamps : true }
);

const Posts =  mongoose.model('Posts',PostSchema);

module.exports = Posts
