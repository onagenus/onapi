var express = require('express')
var sudoku = require('sudoku-gen')
var router = express.Router()

/* GET sudoku. */
router.get('/', function (req, res, next) {
	res.send(sudoku.getSudoku('medium'))
})

module.exports = router
