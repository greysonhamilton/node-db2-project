const checkCarId = (req, res, next) => {
  // DO YOUR MAGIC
  if (!req.params.id) {
    res.status(404).json({
      message: `car with id ${req.params.id} is not found`
    })
  } else {

    next()

  }
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
  if (!req.body) {
    res.status(400).json({
      message: `${req.body} is missing`
    })
  } else {
    next()
  }
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
  if (!req.body.vin) {
    res.status(400).json({
      message: `vin ${req.body.vin} is invalid`
    })
  } else {
    next()
  }

}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
  if (req.body.vin) {
    res.status(400).json({
      message: `vin ${req.body.vin} already exists`
    })
  } else {
    next()
  }
}