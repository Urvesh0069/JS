// JS/Transaction.js
import { navbar, sidebar } from '../Components/navbar.js';

// Insert Navbar and Sidebar
document.getElementById('navbar').innerHTML = navbar('Transaction');
document.getElementById('sidebar').innerHTML = sidebar('Transaction');

// Set today's date by default
document.getElementById('transactionDate').valueAsDate = new Date();

const generateID = () => {
  return 'tx-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
};

const submithandler = (e) => {
  e.preventDefault();

  const name = document.getElementById('transactionName').value.trim();
  const amount = parseFloat(document.getElementById('transactionAmount').value);
  const category = document.getElementById('transactionCategory').value;
  const date = document.getElementById('transactionDate').value;

  if (!name || !amount || !category || !date) {
    alert('Please fill all fields correctly!');
    return;
  }

  const transaction = {
    id: generateID(),
    name,
    amount,
    category,
    date,
    type: 'expense'
  };

  const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
  transactions.push(transaction);
  localStorage.setItem('transactions', JSON.stringify(transactions));

  alert('Transaction added successfully!');
  e.target.reset();
  document.getElementById('transactionDate').valueAsDate = new Date();
};

document.querySelector('#Transaction-form form').addEventListener('submit', submithandler);
