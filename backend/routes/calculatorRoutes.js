const express = require("express")
const { checkInputs } = require('../middleware/calculateMiddleware')
const {
    add,
    subtract,
    multiply,
    divide,
  } = require('../controllers/calculatorController')
const router = express.Router()

router.route('/add/:x/:y').get(checkInputs, add)
router.route('/subtract/:x/:y').get(checkInputs, subtract)
router.route('/multiply/:x/:y').get(checkInputs, multiply)
router.route('/divide/:x/:y').get(checkInputs, divide)


module.exports = router
