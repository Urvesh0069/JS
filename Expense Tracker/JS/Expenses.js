import { navbar, sidebar } from '../Components/navbar.js';

document.getElementById('navbar').innerHTML = navbar('Expenses');
document.getElementById('sidebar').innerHTML = sidebar('Expenses');


const loadTransactions = () => {
  const transactions = JSON.parse(localStorage.getItem('transactions')) || [];

  const tbody = document.getElementById('Expens-table');
  tbody.innerHTML = '';

  let totalAmount = 0;
  let category = 0;

  transactions.forEach((tx) => {
    const row = `
      <tr>
        <td>${tx.date}</td>
        <td>${tx.category}</td>
        <td>₹${tx.amount}</td>
        <td>${tx.name}</td>
      </tr>
    `;
    tbody.innerHTML += row;
    totalAmount += tx.amount;
    document.getElementById('totalExpensesAmount').innerHTML = `₹${totalAmount}`;

  });
};


loadTransactions();
