const checkInputs = (req, res, next) => {
    const { x, y } = req.params;
    if (isNaN(x) || isNaN(y)) {
    res.status(400);
    throw new Error("Please add two numbers");
  }
  next();
}

module.exports = {checkInputs}
