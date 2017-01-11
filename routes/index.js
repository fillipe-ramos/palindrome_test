var express = require('express');
var router = express.Router();
var isPalindrome = require('../lib/palindrome');

/* GET home page. */
router.get('/', function(req, res, next) {
  
	if (req.query['palindrome'] != null){
		var palindrome = isPalindrome(req.query['palindrome']);
		if (palindrome == true){
			res.status(200).render('index', { success: true, text: req.query['palindrome']});
		}else{
			res.status(400).render('index', { success: false, text: req.query['palindrome']});
		}
	}else{
		res.render('index');
	}
});

module.exports = router;
