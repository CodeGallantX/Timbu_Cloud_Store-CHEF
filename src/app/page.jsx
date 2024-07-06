// pages/index.js
import Link from 'next/link';
import { MdSearch, MdPersonOutline, MdFavoriteBorder, MdShoppingCart } from 'react-icons/md';
import './globals.css';

export default function Home() {
  return (
    <div>
      <header>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="../assets/logo.png" alt="logo" />
          <div className="search-container">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 1.75C9.35093 1.75 8.21312 1.97633 7.15152 2.41605C6.08992 2.85578 5.12533 3.5003 4.31282 4.31282C3.5003 5.12533 2.85578 6.08992 2.41605 7.15152C1.97633 8.21312 1.75 9.35093 1.75 10.5C1.75 11.6491 1.97633 12.7869 2.41605 13.8485C2.85578 14.9101 3.5003 15.8747 4.31282 16.6872C5.12533 17.4997 6.08992 18.1442 7.15152 18.5839C8.21312 19.0237 9.35093 19.25 10.5 19.25C12.8206 19.25 15.0462 18.3281 16.6872 16.6872C18.3281 15.0462 19.25 12.8206 19.25 10.5C19.25 8.17936 18.3281 5.95376 16.6872 4.31282C15.0462 2.67187 12.8206 1.75 10.5 1.75ZM0.25 10.5C0.25 4.84 4.84 0.25 10.5 0.25C16.16 0.25 20.75 4.84 20.75 10.5C20.75 13.06 19.811 15.402 18.259 17.198L21.53 20.47C21.6037 20.5387 21.6628 20.6215 21.7038 20.7135C21.7448 20.8055 21.7668 20.9048 21.7686 21.0055C21.7704 21.1062 21.7518 21.2062 21.7141 21.2996C21.6764 21.393 21.6203 21.4778 21.549 21.549C21.4778 21.6203 21.393 21.6764 21.2996 21.7141C21.2062 21.7518 21.1062 21.7704 21.0055 21.7686C20.9048 21.7668 20.8055 21.7448 20.7135 21.7038C20.6215 21.6628 20.5387 21.6037 20.47 21.53L17.198 18.259C15.3383 19.8691 12.9598 20.7536 10.5 20.75C4.84 20.75 0.25 16.16 0.25 10.5Z" fill="#9D9D9D"/>
            </svg>
            <input type="text" placeholder="Search products" />
          </div>
        </div>
        <div className="icons">
          <MdPersonOutline />
          <MdFavoriteBorder />
          <MdShoppingCart />
        </div>
      </header>
      <nav>
        <ul>
          <li><Link href="/cookware">Cookware</Link></li>
          <li><Link href="/kitchen-appliances">Kitchen Appliances</Link></li>
          <li><Link href="/bakeware">Bakeware</Link></li>
          <li><Link href="/knives">Knives</Link></li>
          <li><Link href="/cutlery">Cutlery</Link></li>
          <li><Link href="/contact-us">Contact Us</Link></li>
        </ul>
      </nav>
      <main>
        <h2>Featured Products</h2>
        <p>Check out our latest products.</p>
      </main>
    </div>
  );
}
