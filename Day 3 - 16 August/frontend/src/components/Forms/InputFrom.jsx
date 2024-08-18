import styles from './InputForm.module.css';
import React , {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const InputForm = ({ addExpense }) =>  {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        date: '',
        category: 'food',
        description: '',
        amount: ''
    });

    const [nextId, setNextId] = useState(1);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleAddExpense = (e) => {
        e.preventDefault();
        
        const newExpense = {
            id: nextId,
            ...formData
        };

        addExpense(newExpense);
        setNextId(prevId => prevId + 1);

        setFormData({
            date: '',
            category: 'food',
            description: '',
            amount: ''
        });
        navigate('/');
    };

    return (
        <>
            <div className={styles.heading}>
                <h3>Add new Expense!</h3>
            </div> 
            <hr className={styles.seperator}/>
            <div className={styles.container}>  
                <form onSubmit={handleAddExpense}>
                    <div className={styles.feild}>     
                        {/* Date */}
                        <label>Date </label><br/>
                        <input type="date" id="date" name="date"  onChange={handleChange} value={formData.date}/>
                    </div> 

                    <div className={styles.feild}>
                        {/* Category */}
                        <label>Category </label><br/>
                        <select id="category" name="category"  onChange={handleChange} value={formData.category}>
                            <option value="food">Food</option>
                            <option value="travel">Travel</option>
                            <option value="utilities">Utilities</option>
                            <option value="entertainment">Entertainment</option>
                        </select>
                    </div>

                    <div className={styles.feild}>
                        {/* Description */}
                        <label>Description </label><br/>
                        <input type="text" id="description" name="description" placeholder='Type Here...'  onChange={handleChange} value={formData.description}/> 
                    </div>
                    
                    <div className={styles.feild}>
                        {/* Amount */}
                        <label>Amount </label><br/>
                        <input type="text" id="amount" name="amount" placeholder='000'  onChange={handleChange} value={formData.amount}/> 
                    </div>

                    <div className={styles.button}>
                        <button className={styles.btn}
                            type='submit'
                        > 
                            Add Expense
                        </button>
                        <button className={styles.btn}
                            type='reset'
                            style={{ backgroundColor: "#808b8c" }}
                        > 
                            Cancel
                        </button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default InputForm;