import styles from './ViewExpenses.module.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ViewExpenses = ({expenses}) => {
    const navigate = useNavigate();

    const handleBack = () => {
        console.log(expenses);
        navigate('/');
    }
    
    return (
        <>
            <div className={styles.container}>
                <div className={styles.heading}> 
                    <h3>View Expenses</h3>
                </div> 
                <div className={styles.button}>
                    <button className={styles.btn}
                    onClick={handleBack}
                    > 
                    Back
                    </button>
                </div>
            </div>
            <div className={styles.form}> 
            <table className={styles.table}> 
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses && expenses.length > 0 ? (
                        expenses.map(expense => (
                            <tr key={expense.id}>
                                <td>{expense.date}</td>
                                <td>{expense.category}</td>
                                <td>{expense.description}</td>
                                <td>{expense.amount}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" style={{ textAlign: "center" , color: 'red', border: 'none', fontStyle: 'italic' }}>No expenses found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
            </div>
        </>
    )
}

export default ViewExpenses;