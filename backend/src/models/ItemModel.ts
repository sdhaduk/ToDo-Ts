import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema ({
    name: {type: String, required: true },
    description: {type: String, required: true}
});

export const Item = mongoose.model('Item', ItemSchema);
export const getItems = () => Item.find({});


