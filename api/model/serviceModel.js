'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ServiceSchema = new Schema({
    name:{
        type: String,
        required: 'Kindly enter the name of the Service'
    },
    Created_date: {
        type: Date,
        default: Date.now
    }, email:{
      type: String
    }, phone_number:{
        type: String
    },
    service_type: {
        type: [{
            type: String,
            enum: ['plumbing', 'electrical', 'food', 'lawn_care','handy_man','home_day_care','other']
        }],
        default: ['other']
    }
});
module.exports = mongoose.model('Services',ServiceSchema);
