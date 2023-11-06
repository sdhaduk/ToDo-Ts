import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema ({
    name: {type: String, required: true },
    description: {type: String, required: true}
});

export const ItemModel = mongoose.model('Item', ItemSchema);






