// Navbar function
export const navbar = (heding) => {
  return `
        <div class="container-fluid d-flex justify-content-between align-items-center">
            <h5 class="Expense-heding mb-0">${heding}</h5>
            <div class="d-flex align-items-center gap-2">
                <a href="/HTML/Transaction.html" class="btn btn-custom">Transaction</a>
                <a href="/HTML/Login.html" class="btn btn-custom">Login</a>
                <a href="/HTML/Sign-In.html" class="btn btn-custom">Sign In</a>
            </div>
        </div>`
};

// Sidebar function
export const sidebar = (activePage) => {
  return `
    <h4 class="mb-4 text-primary">FinanSync</h4>
    <ul class="nav nav-pills flex-column mb-auto">
        <li><a href="/index.html" class="nav-link ${activePage === 'Dashboard' ? 'active' : ''}">Dashboard</a></li>
        <li><a href="/HTML/Income.html" class="nav-link ${activePage === 'Income' ? 'active' : ''}">Income</a></li>
        <li><a href="/HTML/Expenses.html" class="nav-link ${activePage === 'Expenses' ? 'active' : ''}">Expenses</a></li>
        <li><a href="/HTML/EMI-Loan.html" class="nav-link ${activePage === 'EMI / Loans' ? 'active' : ''}">EMI / Loans</a></li>
        <li><a href="/HTML/Savings.html" class="nav-link ${activePage === 'Savings' ? 'active' : ''}">Savings</a></li>
        <li><a href="/HTML/Investments.html" class="nav-link ${activePage === 'Investments' ? 'active' : ''}">Investments</a></li>
        <li><a href="/HTML/Budget-Planner.html" class="nav-link ${activePage === 'Budget Planner' ? 'active' : ''}">Budget Planner</a></li>
        <li><a href="/HTML/Purchase-Plans.html" class="nav-link ${activePage === 'Purchase Plans' ? 'active' : ''}">Purchase Plans</a></li>
        <li><a href="/HTML/Reports.html" class="nav-link ${activePage === 'Reports' ? 'active' : ''}">Reports</a></li>
    </ul>
  `;
};

