import "./FormExpense.css";
import React, { useState } from "react";
const FormExpense = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredamount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredamount: "",
  //   enteredDate: "",
  // });
  // to need to know that usestate can be used many times as long as the destructuring objects have different names
  /* you also need to know in this example we give the usestate hook the initial value of "" but you can instead of using 
the string as an inital value and use many usestate in our case i used it 3 times so i can use it only once with an object 
parameters so i can initialize the title amount date inside the object and by using any handler fuction i have to reflect 
the other values as well like for example i am updating title i have to include the latest values of amount and date
so we can use the ... with the object so we can include the states of the previous object and then we override the title 
by the event.target.value , i hope you understand :) that's why i included the code down hased so you check the difference.
*/

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredamount: event.target.value };
    // });
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredamount,
      date: new Date(enteredDate),
    };
    console.log(expenseData);
    // here i am reseting the values to be empty after i already collected the date from the all inputs
    //that's why i have an attribute called value to point to the value of title,amount, and the date
    props.onSaveExpenseDate(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form className="form__mainClass" onSubmit={submitHandler}>
      <div className="form__title">
        <label> Title </label>{" "}
        <input
          type="text"
          value={enteredTitle}
          name="title"
          onChange={titleChangeHandler}
        />{" "}
      </div>
      <div className="form__amount">
        <label> Amount </label>{" "}
        <input
          type="text"
          value={enteredamount}
          name="amount"
          onChange={amountChangeHandler}
        />{" "}
      </div>{" "}
      <div className="form__date">
        <label> Date </label>{" "}
        <input
          type="date"
          value={enteredDate}
          className="form_date__input"
          onChange={dateChangeHandler}
        />{" "}
      </div>{" "}
      <button className="form_add__button"> Add Expense </button>{" "}
    </form>
  );
};
export default FormExpense;
