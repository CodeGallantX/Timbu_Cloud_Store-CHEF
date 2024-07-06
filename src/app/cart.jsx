// pages/cart.js
import Link from 'next/link';

export default function Cart() {
  return (
    <div>
      <header>
        <h1>Cart</h1>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/checkout">Checkout</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <h2>Your Cart</h2>
        <p>Your cart is currently empty.</p>
      </main>
    </div>
  );
}
