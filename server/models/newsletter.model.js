let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let newsletterSchema = new Schema({
    email: { type: String, required: true },
    subscribed: { type: Boolean, default: true }
});

let newsletterModel = mongoose.model('Newsletter', newsletterSchema);
module.exports = newsletterModel;