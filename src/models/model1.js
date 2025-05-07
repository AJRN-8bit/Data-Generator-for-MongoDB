// Full Person schema and model.

const {Schema, model} = require("mongoose");

// Person shema and model
const MadeSchema = new Schema({
    client: {
        name: {type: String, required: true},
        lastname: {type: String, required: true},
        email: {type: String, required: true},
    },
    product: {type: String, required: true},
    category: {type: String, required: true},
    amount: {type: Number, required: true},
    unit_price: {type: Number, required: true},
    total: {type: Number, required: true},
    soldDate: {type: Date, default: Date.now}
}
,{collection: "DataPlace3"}  // Sets the collection name.
);

const NewSchema = model("NewSchema", MadeSchema)  // Person model, it will the used for the data insertion

module.exports = {MadeSchema, NewSchema};