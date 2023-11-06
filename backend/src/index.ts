import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";
import {getItems, createItem, deleteItem, updateItem, getItemById} from './models/ItemModel';

const app = express();
app.use(express.json());
app.use(cors());

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("connected to db");
        app.listen(3000, () => {
            console.log("server listening on port 3000");
        });
    })
    .catch((error) => {
        console.log(error);
    });

app.get('/', (req, res) => {
    res.status(200).send({message: "hi"})
});

app.post('/items/create-items', async (req, res) => {
    try {
        if( !req.body.title || !req.body.description) {
            return res.status(400).send({message: "send all fields"});
        }

        const {title, description} = req.body
        const newItem = {
            title: title,
            description: description
        }

        const item = await createItem(newItem);
        return res.status(200).send(item)

    } catch (error) {
        console.log(error)
        res.status(500).send({message: error.message})
    }
});

app.get('/items/get-items', async (req, res) => {
    try {
        const items = await getItems();
        return res.status(200).send(items)

    } catch (error)  {
        console.log(error)
        res.status(500).send({message: error.message})
    }
});

app.get('/items/get-items/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const item = await getItemById(id);
        
        return res.status(200).send(item)
    } catch (error) {
        console.log(error)
        res.status(500).send({"message": error.message})
    }
});

app.put('/items/update-item/:id', async (req, res) => {
    try {
        if (!req.body.title || !req.body.description) {
            return res.status(400).send({message: "send all fields"})        
        }
        const {id} = req.params
        const {title, description} = req.body
        const result = await updateItem(id, {title, description})

        if (!result) {
            return res.status(404).send({message: "Item not found"})
        }
        return res.status(200).send({message: "Item has been updated"})

    } catch (error) {
        console.log(error)
        res.status(500).send({message: error.message})
    }
});

app.delete('/items/delete-item/:id', async (req, res) => {
    try {
        const {id} = req.params
        const result = await deleteItem(id)

        if (!result) {
            res.status(404).send({message: "Item not found"})
        }

        return res.status(200).send({message: "Item successfully deleted"})

    } catch (error) {
        console.log(error)
        res.status(500).send({message: error.message})
    }
})








