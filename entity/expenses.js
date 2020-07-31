import utils, { generateRandomId } from '../utils/utils';


const expenses = [
    { id: 0, expense: 0, type:'example' },
    { id: 1, expense:  10, type:'example 2' },
    { id: 2, expense:  255, type:'example 3' }
]

const addExpense = (expenseInput, typeInput, setExpenseState) => {
    const id = generateRandomId(1, 10000);
    expenses.push({id, expenseInput, typeInput});
    setExpenseState(expenses);
 }


export { expenses, addExpense};