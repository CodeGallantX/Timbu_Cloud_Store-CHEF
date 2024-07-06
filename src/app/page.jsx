import React from 'react';
import Image from 'next/image';


const Navbar = () => {
  return (
    <div style={{ backgroundColor: '#0a0a0a', paddingTop: '24px', paddingBottom: '16px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '1248px', margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
          <img src="https://ik.imagekit.io/mshcgnjju/CHEF%20-%20Timbu%20Cloud%20Store/logo.png" alt="Logo" style={{ width: '104px', height: '24px' }} />
          <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#292929', borderRadius: '8px', padding: '16px 32px', opacity: 0.83, width: '356px' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 2.75C10.3509 2.75 9.21312 2.97633 8.15152 3.41605C7.08992 3.85578 6.12533 4.5003 5.31282 5.31282C4.5003 6.12533 3.85578 7.08992 3.41605 8.15152C2.97633 9.21312 2.75 10.3509 2.75 11.5C2.75 12.6491 2.97633 13.7869 3.41605 14.8485C3.85578 15.9101 4.5003 16.8747 5.31282 17.6872C6.12533 18.4997 7.08992 19.1442 8.15152 19.5839C9.21312 20.0237 10.3509 20.25 11.5 20.25C13.8206 20.25 16.0462 19.3281 17.6872 17.6872C19.3281 16.0462 20.25 13.8206 20.25 11.5C20.25 9.17936 19.3281 6.95376 17.6872 5.31282C16.0462 3.67187 13.8206 2.75 11.5 2.75ZM1.25 11.5C1.25 5.84 5.84 1.25 11.5 1.25C17.16 1.25 21.75 5.84 21.75 11.5C21.75 14.06 20.811 16.402 19.259 18.198L22.53 21.47C22.6037 21.5387 22.6628 21.6215 22.7038 21.7135C22.7448 21.8055 22.7668 21.9048 22.7686 22.0055C22.7704 22.1062 22.7518 22.2062 22.7141 22.2996C22.6764 22.393 22.6203 22.4778 22.549 22.549C22.4778 22.6203 22.393 22.6764 22.2996 22.7141C22.2062 22.7518 22.1062 22.7704 22.0055 22.7686C21.9048 22.7668 21.8055 22.7448 21.7135 22.7038C21.6215 22.6628 21.5387 22.6037 21.47 22.53L18.198 19.259C16.3383 20.8691 13.9598 21.7536 11.5 21.75C5.84 21.75 1.25 17.16 1.25 11.5Z" fill="#9D9D9D"/>
            </svg>

            <input type="text" placeholder="Search products" style={{ 
              background: 'none', 
              border: 'none', 
              color: '#9d9d9d',
              fontSize: '16px', 
              fontWeight: 500,
              marginLeft: '24px',
              width: '100%',
              height: '16px',
              outline: 'none'
            }} />
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', cursor: 'pointer' }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 10C14.2091 10 16 8.20914 16 6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6C8 8.20914 9.79086 10 12 10Z" stroke="#FFFFFE" stroke-width="1.5"/>
          <path d="M20 17.5C20 19.985 20 22 12 22C4 22 4 19.985 4 17.5C4 15.015 7.582 13 12 13C16.418 13 20 15.015 20 17.5Z" stroke="#FFFFFE" stroke-width="1.5"/>
        </svg>

          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.5" d="M12 5.50098L14 7.50098" stroke="#FFFFFE" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M12 5.49999L11.46 6.01999C11.53 6.09257 11.6138 6.15031 11.7066 6.18974C11.7994 6.22918 11.8992 6.24951 12 6.24951C12.1008 6.24951 12.2006 6.22918 12.2934 6.18974C12.3862 6.15031 12.47 6.09257 12.54 6.01999L12 5.49999ZM9.426 18.322C7.91 17.127 6.253 15.96 4.938 14.48C3.65 13.028 2.75 11.335 2.75 9.13699H1.25C1.25 11.803 2.36 13.837 3.817 15.476C5.247 17.086 7.071 18.376 8.497 19.5L9.426 18.322ZM2.75 9.13699C2.75 6.98699 3.965 5.18299 5.624 4.42399C7.236 3.68699 9.402 3.88199 11.46 6.01999L12.54 4.98099C10.1 2.44399 7.264 2.02499 5 3.05999C2.786 4.07299 1.25 6.42499 1.25 9.13699H2.75ZM8.497 19.5C9.01 19.904 9.56 20.334 10.117 20.66C10.674 20.985 11.31 21.25 12 21.25V19.75C11.69 19.75 11.326 19.63 10.874 19.365C10.421 19.101 9.952 18.737 9.426 18.322L8.497 19.5ZM15.503 19.5C16.929 18.375 18.753 17.087 20.183 15.476C21.64 13.836 22.75 11.803 22.75 9.13699H21.25C21.25 11.335 20.35 13.028 19.062 14.48C17.747 15.96 16.09 17.127 14.574 18.322L15.503 19.5ZM22.75 9.13699C22.75 6.42499 21.215 4.07299 19 3.05999C16.736 2.02499 13.902 2.44399 11.46 4.97999L12.54 6.01999C14.598 3.88299 16.764 3.68699 18.376 4.42399C20.035 5.18299 21.25 6.98599 21.25 9.13699H22.75ZM14.574 18.322C14.048 18.737 13.579 19.101 13.126 19.365C12.674 19.629 12.31 19.75 12 19.75V21.25C12.69 21.25 13.326 20.985 13.883 20.66C14.441 20.334 14.99 19.904 15.503 19.5L14.574 18.322Z" fill="#FFFFFE"/>
          </svg>

          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 3L2.265 3.088C3.585 3.528 4.245 3.748 4.622 4.272C5 4.796 5 5.492 5 6.883V9.5C5 12.328 5 13.743 5.879 14.621C6.757 15.5 8.172 15.5 11 15.5H19" stroke="#FFFFFE" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M5 6H16.45C18.505 6 19.533 6 19.978 6.674C20.422 7.349 20.018 8.293 19.208 10.182L18.779 11.182C18.401 12.064 18.212 12.504 17.837 12.752C17.461 13 16.981 13 16.022 13H5M7.5 18C7.89782 18 8.27936 18.158 8.56066 18.4393C8.84196 18.7206 9 19.1022 9 19.5C9 19.8978 8.84196 20.2794 8.56066 20.5607C8.27936 20.842 7.89782 21 7.5 21C7.10218 21 6.72064 20.842 6.43934 20.5607C6.15804 20.2794 6 19.8978 6 19.5C6 19.1022 6.15804 18.7206 6.43934 18.4393C6.72064 18.158 7.10218 18 7.5 18ZM16.5 18C16.8978 18 17.2794 18.158 17.5607 18.4393C17.842 18.7206 18 19.1022 18 19.5C18 19.8978 17.842 20.2794 17.5607 20.5607C17.2794 20.842 16.8978 21 16.5 21C16.1022 21 15.7206 20.842 15.4393 20.5607C15.158 20.2794 15 19.8978 15 19.5C15 19.1022 15.158 18.7206 15.4393 18.4393C15.7206 18.158 16.1022 18 16.5 18Z" stroke="#FFFFFE" stroke-width="1.5"/>
          </svg>

        </div>
      </div>
      <div style={{ backgroundColor: '#db6a18', marginTop: '20px', display: 'flex', justifyContent: 'center', paddingTop: '16px', paddingBottom: '16px', gap: '56px' }}>
        <a href="#" style={navLinkStyle}>Cookware</a>
        <a href="#" style={navLinkStyle}>Kitchen appliances</a>
        <a href="#" style={navLinkStyle}>Bakeware</a>
        <a href="#" style={navLinkStyle}>Knives</a>
        <a href="#" style={navLinkStyle}>Cutlery</a>
        <a href="#" style={navLinkStyle}>Contact us</a>
      </div>
    </div>
  );
};

const navLinkStyle = {
  fontFamily: 'Montserrat, sans-serif',
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: '24px',
  color: '#fffffe',
  textDecoration: 'none',
};

const HeroSection = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '618px' }}>
      <img
      src="https://ik.imagekit.io/mshcgnjju/CHEF%20-%20Timbu%20Cloud%20Store/hero-bg.jpg"
        alt="Background"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <div 
        style={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
          textAlign: 'center',
          width: '100%',
          color: '#fffffe' 
        }}
      >
        <h1 style={{ 
          fontFamily: 'Lora, serif', 
          fontWeight: 700, 
          fontSize: '44px', 
          lineHeight: '48px',
          letterSpacing: '0.44px',
        }}>
          Built to last, Cook with Confidence
        </h1>
        <p style={{ 
          fontFamily: 'Montserrat, sans-serif', 
          fontWeight: 500, 
          fontSize: '18px', 
          lineHeight: '30px',
          marginTop: '16px'
        }}>
          Limited edition! Get yours before they’re gone again, shop the collection now!
        </p>
      </div>
    </div>
  );
};

const FeaturedList = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <h2 style={{
        fontFamily: 'Lora, sans-serif', 
        fontWeight: 700, 
        fontSize: '28px', 
        letterSpacing: '0.44px',
        // textAlign: 'center',
      }}>
        Cookware Collection
        <hr style={{
          width: '50px',
          textAlign: 'center', 
              }} />
      </h2>
    </div>
  );
};

export default FeaturedList;
