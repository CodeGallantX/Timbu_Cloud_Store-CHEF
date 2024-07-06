// pages/products.js
import Link from 'next/link';

export default function Products() {
  return (
    <div>
      <header>
        <h1>Products</h1>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/cart">Cart</Link></li>
            <li><Link href="/checkout">Checkout</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <h2>Product Listing</h2>
        <div>
          <div className="product">
            <h3>Product 1</h3>
            <p>Description of Product 1</p>
            <button>Add to Cart</button>
          </div>
          <div className="product">
            <h3>Product 2</h3>
            <p>Description of Product 2</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </main>
    </div>
  );
}
