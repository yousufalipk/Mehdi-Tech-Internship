import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, {useState} from 'react';

//Importing Pages
import AuthLayout from './Layout/Auth/Auth';
import AddExpense from './Pages/AddExpense/AddExpense';
import ViewExpenses from './Pages/View Expenses/ViewExpenses';

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses(prevExpenses => [...prevExpenses, expense]);
  };

  return (
    <>
      <BrowserRouter> 
        <Routes> 
          <Route path="*" element={<AuthLayout />}/> 
          <Route path="/view-expenses" element={<ViewExpenses expenses={expenses}  />}/> 
          <Route path="/add-expenses" element={<AddExpense addExpense={addExpense} />}/> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
