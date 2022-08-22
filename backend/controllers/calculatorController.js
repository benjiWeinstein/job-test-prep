// @desc    Add two numbers
//@route    GET /calculate/add/x/y
const add = (req, res) => {
  const { x, y } = req.params
  const solution = Number(x) + Number(y);
  res
    .status(200)
    .json({ message: "add", x: req.params.x, y: req.params.y, solution });
};

// @desc    Subtract two numbers
//@route    GET /calculate/subtract/x/y
const subtract = (req, res) => {
  const { x, y } = req.params;
  const solution = Number(x) - Number(y);
  res
    .status(200)
    .json({ message: "subtract", x: req.params.x, y: req.params.y, solution });
};

// @desc    Multiply two numbers
//@route    GET /calculate/multiply/x/y
const multiply = (req, res) => {
  const { x, y } = req.params;
  const solution = Number(x) * Number(y);
  res
    .status(200)
    .json({ message: "multiply", x: req.params.x, y: req.params.y, solution });
};

// @desc    Divide two numbers
//@route    GET /calculate/divide/x/y
const divide = (req, res) => {
  const { x, y } = req.params;
  const solution = Number(x) / Number(y);
  res
    .status(200)
    .json({ message: "divide", x: req.params.x, y: req.params.y, solution });
};

module.exports = {
  add,
  subtract,
  multiply,
  divide,
};
