import styles from './AddExpense.module.css';
import React from 'react';
import { useNavigate} from 'react-router-dom';

//Importing Form Component
import InputFrom from '../../components/Forms/InputFrom';

const AddExpense = ({ addExpense }) => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/');
    }
    
    return (
        <>
            <div className={styles.container}>
                <div className={styles.heading}> 
                    <h3>Add Expense</h3>
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
                <InputFrom addExpense={addExpense}/>
            </div>
        </>
    )
}

export default AddExpense;