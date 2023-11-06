import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema ({
    title: {type: String, required: true },
    description: {type: String, required: true}
});

export const Item = mongoose.model('Item', ItemSchema);
export const getItems = () => Item.find({});
export const createItem = (values: Record<string, any>) => new Item(values)
    .save().then((user) => user.toObject());
export const deleteItem = (id: string) => Item.findOneAndDelete({_id: id});
export const updateItem = (id: string, values: Record<string, any>) => Item.findByIdAndUpdate(id, values)
