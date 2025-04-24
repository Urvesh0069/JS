const navbar = () => {
  return `
    <div class="container-fluid">
      <a class="navbar-brand" href="#">MyStore</a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link" href="/index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/HTML/shop.html">Shop</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="categoryDropdown"
              role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Categories
            </a>
            <ul class="dropdown-menu" aria-labelledby="categoryDropdown">
              <li><a class="dropdown-item" href="#">Electronics</a></li>
              <li><a class="dropdown-item" href="#">Clothing</a></li>
              <li><a class="dropdown-item" href="#">Accessories</a></li>
              <li><a class="dropdown-item" href="#">Books</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/HTML/addproduct.html">Add Product</a>
          </li>
        </ul>

        <div class="cart-wishlist-btns">
          <a href="/HTML/login.html" class="btn btn-custom">
            <i class="fas fa-user"></i> Login
          </a>
          <a href="/HTML/signin.html" class="btn btn-custom">
            <i class="fas fa-user"></i> Signup
          </a>
          <button class="btn btn-custom">
            <i class="fas fa-heart"></i> Wishlist
          </button>
          <button class="btn btn-custom">
            <i class="fas fa-shopping-cart"></i> Cart
          </button>
        </div>
      </div>
    </div>
  `;
};

export default navbar;
