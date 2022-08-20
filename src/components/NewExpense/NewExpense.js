import React, { useState } from 'react';
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";


const NewExpense = (props) => {

  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (event) => {
    const expenseData = {
      ...event,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
    // console.log(expenses)
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  }

  const stopEditionHandler = () => {
    setIsEditing(false);
  }

  return (
   
      <div className="new-expense">
        {!isEditing &&
        <button onClick = {startEditingHandler}> Add New Expenses </button>}
        {isEditing &&
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} 
        onCancel = {stopEditionHandler}/>}
      </div>
 
  );
};

export default NewExpense;
