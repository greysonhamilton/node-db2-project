// DO YOUR MAGIC
const express = require("express");
const db = require("./cars-model");


const router = express.router();

router.get("/", async (req,res,next) => {

    try {
        await res.status(200).json(db.getAll())
    } catch(err) {
        next(err)
    }
})

router.get("/:id", carId(), async (req,res,next) => {

    try{

        const car = await db.getById(req.params.id)
        res.status(200).json(car)

    } catch(err) {

        next(err)

    }
    
})