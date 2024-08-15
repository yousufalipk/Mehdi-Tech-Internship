import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <>
            <div className={styles.container}>   
                <h2 className={styles.heading}>
                    Expense Management System
                </h2>
            </div>
        </>
    )
}

export default Header;