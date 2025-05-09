// JS/index.js
import { navbar, sidebar } from '../Components/navbar.js';

// Insert the Navbar into the HTML
document.getElementById('navbar').innerHTML = navbar(`Income`);

// Insert the Sidebar into the HTML
document.getElementById("sidebar").innerHTML = sidebar(`Income`);
