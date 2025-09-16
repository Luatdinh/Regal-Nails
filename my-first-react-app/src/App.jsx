import { useState } from 'react';
import './index.css';
import './App.css';

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="brand">
        <div>
          <h1 className="brand-name">Regal Nails</h1>
          <p className="brand-tagline">Salon &amp; Spa</p>
        </div>
      </div>

      {/* Mobile hamburger */}
      <button
        className="menu-toggle"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="menu-bar" />
        <span className="menu-bar" />
        <span className="menu-bar" />
      </button>

      <nav className={`nav ${open ? 'nav-open' : ''}`}>
        <a href="#services" onClick={() => setOpen(false)}>Services</a>
        <a href="#pricing" onClick={() => setOpen(false)}>Pricing</a>
        <a href="#hours" onClick={() => setOpen(false)}>Hours</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        <a className="btn-primary" href="tel:+19804028917" onClick={() => setOpen(false)}>
          Book Now
        </a>
      </nav>
    </header>
  );
}


function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <h2>Relax. Refresh. Feel Regal.</h2>
        <p>
          Premium manicures, pedicures, and nail enhancements—crafted with care and top-quality products.
        </p>
        <div className="hero-cta">
          <a className="btn-primary" href="tel:+19804028917">Call to Book</a>
          <a className="btn-outline" href="#pricing">View Prices</a>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, desc, icon }) {
  return (
    <div className="card service-card">
      <div className="service-icon" aria-hidden>{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

function Services() {
  const items = [
    { title: 'Pedicure', desc: 'Classic, Regal, and Deluxe options to pamper your feet.', icon: '🦶' },
    { title: 'Manicure', desc: 'Basic and gel finishes for a polished look.', icon: '💅' },
    { title: 'Dip (SNS)', desc: 'Long-lasting color with optional tips & length.', icon: '✨' },
    { title: 'Gel X', desc: 'Lightweight extensions with a natural feel.', icon: '🌟' },
    { title: 'Acrylic', desc: 'Full set, refills, and shaping—your style, your way.', icon: '💎' },
    { title: 'Polish Change', desc: 'Hands or toes—regular & gel options.', icon: '🎨' },
    { title: 'Other Services', desc: 'Soaks, removals, paraffin, French, chrome, ombré, cat-eye.', icon: '🧴' },
    { title: 'Kids (Under 10)', desc: 'Gentle services for little ones.', icon: '🧒' },
  ];
  return (
    <section id="services" className="section">
      <h2 className="section-title">Our Services</h2>
      <div className="grid">
        {items.map((s) => <ServiceCard key={s.title} {...s} />)}
      </div>
    </section>
  );
}

function PriceTable({ title, rows, note }) {
  return (
    <div className="card price-card">
      <h3 className="price-title">{title}</h3>
      <ul className="price-list">
        {rows.map((r) => (
          <li key={r.label} className="price-row">
            <span>{r.label}</span>
            <span className="dots" aria-hidden>........................................</span>
            <span className="price">{r.price}</span>
          </li>
        ))}
      </ul>
      {note && <p className="price-note">{note}</p>}
    </div>
  );
}

function Pricing() {
  const pedicure = [
    { label: 'Classic Pedicure', price: '$40' },
    { label: 'Regal Pedicure', price: '$50' },
    { label: 'Deluxe Pedicure', price: '$60' },
  ];
  const manicure = [
    { label: 'Basic Manicure', price: '$25' },
    { label: 'Gel Manicure', price: '$40' },
  ];
  const dip = [
    { label: 'Dip New Set', price: '$50' },
    { label: 'Add Tip', price: '+$10' },
    { label: 'Long Length', price: '+$5' },
    { label: 'Add Manicure', price: '+$10' },
  ];
  const gelx = [
    { label: 'Gel X New Set', price: '$60' },
    { label: 'Long Length', price: '+$5' },
    { label: 'Add Manicure', price: '+$10' },
  ];
  const acrylic = [
    { label: 'Full Set', price: '$60' },
    { label: 'Refill', price: '$50' },
    { label: 'Cut Down', price: '$5' },
    { label: 'Builder Gel', price: 'Free' },
    { label: 'Top Gel', price: 'Free' },
  ];
  const polish = [
    { label: 'Hands (Regular)', price: '$15' },
    { label: 'Toes (Regular)', price: '$20' },
    { label: 'Hands (Gel)', price: '$35' },
    { label: 'Toes (Gel)', price: '$35' },
  ];
  const other = [
    { label: 'Gel Soak Off', price: '$15' },
    { label: 'Dip / Gel / Acrylic Removal', price: '$20' },
    { label: 'Paraffin Wax', price: '$10' },
    { label: 'French', price: '$10' },
    { label: 'Chrome', price: '$15' },
    { label: 'Ombré', price: '$20' },
    { label: 'Cat-eye', price: '$10' },
  ];
  const kids = [
    { label: 'Manicure', price: '$20' },
    { label: 'Pedicure', price: '$30' },
    { label: 'Polish (Hands)', price: '$12' },
    { label: 'Polish (Toes)', price: '$15' },
    { label: 'Gel Polish (Hands/Toes)', price: '$25' },
  ];

  return (
    <section id="pricing" className="section">
      <h2 className="section-title">Pricing</h2>
      <div className="grid price-grid">
        <PriceTable title="Pedicure" rows={pedicure} />
        <PriceTable title="Manicure" rows={manicure} />
        <PriceTable title="Dip (SNS)" rows={dip} />
        <PriceTable title="Gel X" rows={gelx} />
        <PriceTable title="Acrylic" rows={acrylic} />
        <PriceTable title="Polish Change" rows={polish} />
        <PriceTable title="Other Services" rows={other} />
        <PriceTable title="Kids (Under 10)" rows={kids} />
      </div>
      <p className="disclaimer">
        Prices subject to change. Please call for current promos and availability.
      </p>
    </section>
  );
}

function Hours() {
  return (
    <section id="hours" className="section">
      <h2 className="section-title">Business Hours</h2>
      <div className="card hours-card">
        <ul className="hours-list">
          <li><span>Mon – Sat</span><span>9:30 AM – 7:30 PM</span></li>
          <li><span>Sunday</span><span>11:00 AM – 5:00 PM</span></li>
        </ul>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section">
      <h2 className="section-title">Contact &amp; Location</h2>
      <div className="contact-grid">
        <div className="card contact-card">
          <h3>Reach Us</h3>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+1-000-000-0000">+1 (980) 402-8917</a>
          </p>
          <p>
            <strong>Address:</strong>{" "}
            <span>
              Regal Nails, Salon &amp; Spa <br />
              Inside Walmart – The Arboretum <br />
              3209 Pineville-Matthews Rd <br />
              Charlotte, NC 28226
            </span>
          </p>
          <a className="btn-primary full"  href="tel:+19804028917">
            Call to Book
          </a>
        </div>

        <div className="card map-card" role="region" aria-label="Map">
          <iframe
            title="Regal Nails Location Map"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.681761916668!2d-80.7825419!3d35.1073276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88569fda53e3c3a7%3A0x36a1960f78d66c36!2s3209%20Pineville-Matthews%20Rd%2C%20Charlotte%2C%20NC%2028226!5e0!3m2!1sen!2sus!4v1694811234567"
            width="100%"
            height="320"
            style={{ border: 0, borderRadius: "10px" }}
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}


function Footer() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} This location is an independently owned and operated franchise
For further information, comments, compliments, or suggestions please call: 1.866.279.8190 or email: comments@regalnails.com.</p>
    </footer>
  );
}

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Pricing />
      <Hours />
      <Contact />
      <Footer />
    </div>
  );
}
