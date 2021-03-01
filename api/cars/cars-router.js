// DO YOUR MAGIC
const express = require("express");
const db = require("./cars-model");
const { checkCarId, checkCarPayload, checkVinNumberValid, checkVinNumberUnique } = require("./cars-middleware");

const router = express.router();

router.get("/", async (req,res,next) => {

    try {
        await res.status(200).json(db.getAll())
    } catch(err) {
        next(err)
    }
})

router.get("/:id", checkCarId(), async (req,res,next) => {

    try{

        const car = await db.getById(req.params.id)
        res.status(200).json(car)

    } catch(err) {

        next(err)

    }
    
})

router.post("/", checkCarPayload(), checkVinNumberValid(), checkVinNumberUnique(), async (req,res,next) => {

    try {

        const newCar = await module.create(req.params.id, req.body)
        res.status(200).json(newCar)

    } catch(err) {

        next(err)

    }

})

module.exports = router;