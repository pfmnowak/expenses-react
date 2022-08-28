import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [formVisible, setFormVisible] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    toggleFormHandler();
  };

  const toggleFormHandler = () => {
    setFormVisible(!formVisible);
  };

  return (
    <div className="new-expense">
      {!formVisible && (
        <button onClick={toggleFormHandler}>Add New Expense</button>
      )}
      {formVisible && (
        <ExpenseForm
          onToggleForm={toggleFormHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
