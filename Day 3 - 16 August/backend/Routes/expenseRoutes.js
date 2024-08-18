const express = require('express'); 
const router = express.Router();

const { 
    addExpense,
    removeExpense, 
    fetchExpenses
} = require('../Controller/expenseController');

//Add Expense 
router.route('/add-expense').post(addExpense);

//Remove Expense
router.route('/remove-expense').delete(removeExpense);

//Fetch Expenses
router.route('/fetch-expenses').get(fetchExpenses);


module.exports = router;