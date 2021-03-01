const db = require("../../data/db-config");

const getAll = async () => {
  // DO YOUR MAGIC
  await db.select("*").from("cars")
}

const getById = async () => {
  // DO YOUR MAGIC
    await db.select("*")
      .from("cars")
      .where("id", id)
      .first()
}

const create = () => {
  // DO YOUR MAGIC
  await db.insert({
    vin: car.vin,
    make: car.make,
    model: car.model,
    mileage: car.mileage,
    title: car.title,
    transmission: car.transmission
  })
    .into("cars")
}

module.exports = {

  getAll,
  getById,
  create
  
}