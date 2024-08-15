import styles from './Auth.module.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

//Importing Heeader & Footer
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const AuthLayout = () => {

    const navigate = useNavigate();

    //Navigate to Add Expense page
    const handleAddExpense = () => {
        navigate("/add-expenses");
    }
    
    //Navigate to Expenses Table
    const handleViewExpenses = () => {
        navigate("/view-expenses");
    }
    return (
        <>  
            <div className={styles.container}>
                <Header />
                <div className={styles.buttons}> 
                    <button className={styles.btn}
                        onClick={handleAddExpense}
                    > 
                    Add Expense 
                    </button>
                    <button className={styles.btn}
                        onClick={handleViewExpenses}
                    > 
                        View Expenses
                    </button>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default AuthLayout;