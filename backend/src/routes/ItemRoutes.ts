import express from "express";
import {getItems, createItem, deleteItem, updateItem, getItemById} from '../models/ItemModel';

const router  = express.Router();

router.post('/create-item', async (req, res) => {
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

router.get('/get-items', async (req, res) => {
    try {
        const items = await getItems();
        return res.status(200).send(items)

    } catch (error)  {
        console.log(error)
        res.status(500).send({message: error.message})
    }
});

router.get('/get-item/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const item = await getItemById(id);
        
        return res.status(200).send(item)
    } catch (error) {
        console.log(error)
        res.status(500).send({"message": error.message})
    }
});

router.put('/update-item/:id', async (req, res) => {
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

router.delete('/delete-item/:id', async (req, res) => {
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
});

export default router;