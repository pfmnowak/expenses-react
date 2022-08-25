import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  return (
    <Card className="expenses">
      {props.expenses.map((e) => (
        <ExpenseItem title={e.title} amount={e.amount} date={e.date} />
      ))}
    </Card>
  );
}

export default Expenses;
