// pages/checkout.js
import Link from 'next/link';

export default function Checkout() {
  return (
    <div>
      <header>
        <h1>Checkout</h1>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/cart">Cart</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <h2>Checkout Process</h2>
        <p>Please fill in your details to complete the purchase.</p>
      </main>
    </div>
  );
}
