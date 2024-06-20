var express = require('express')
var sudoku = require('sudoku-gen')
var router = express.Router()

/* GET sudoku. */
router.get('/:difficulty', function (req, res, next) {
	switch (req.params.difficulty) {
		case '0':
			res.send(sudoku.getSudoku('easy'))
			break
		case '1':
			res.send(sudoku.getSudoku('medium'))
			break
		case '2':
			res.send(sudoku.getSudoku('hard'))
			break
		case '3':
			res.send(sudoku.getSudoku('expert'))
			break
		default:
			res.send(sudoku.getSudoku('medium'))
	}
})

module.exports = router
