// import logo from "./logo.svg";
import "./App.css";
import Expense from "./components/Expense";
function App() {
  const expense = [
    { title: "Toilet paper", amount: 94.12, date: new Date(2021, 8, 3) },
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 4, 23) },
    { title: "New TV", amount: 799.49, date: new Date(2021, 8, 3) },
    { title: "New Desk (Wooden)", amount: 450, date: new Date(2021, 12, 21) },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <Expense items={expense} />
      </header>
    </div>
  );
}

export default App;
