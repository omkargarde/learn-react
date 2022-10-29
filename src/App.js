import ExpenseItems from "./components/Expenses/ExpenseItems";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const items = Object.keys(expenses).map((key, index) => (
    <div key={index}>
      <ExpenseItems
        title={expenses[key].title}
        amount={expenses[key].amount}
        date={expenses[key].date}
      ></ExpenseItems>
    </div>
  ));
  return (
    <div>
      <h2>Let's get started!</h2>
      {items}
    </div>
  );
}

export default App;
