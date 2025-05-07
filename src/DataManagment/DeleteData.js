//// File that deletes all the documents of the database.

const {NewSchema} = require("../models/model1");

async function DeleteData() {
    try {
        
        const doc_count = await NewSchema.countDocuments();  // Stores the amount of document in the collection
        await NewSchema.deleteMany({});  // Deletes all the documents

        console.log(`Deleted ${doc_count} documents from the collection.`);  // Shows the amount of deleted documents.
        
    } catch (error) {
        console.log("An error occurred, failed to delete the documents  (。>︿<)_θ", error.toString());  // Shows the error if it occurs.
    }
}

module.exports.DeleteData = DeleteData;  // Exports the function.