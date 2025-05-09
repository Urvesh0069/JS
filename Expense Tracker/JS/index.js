// JS/index.js
import { navbar, sidebar } from '../Components/navbar.js';

// Insert the Navbar into the HTML
document.getElementById('navbar').innerHTML = navbar(`Expense Tracker`);

// Insert the Sidebar into the HTML
document.getElementById("sidebar").innerHTML = sidebar(`Dashboard`);
