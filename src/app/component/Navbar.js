// components/Navbar.js

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "black", color: "white" }}>
      <Link href="/" style={{ padding: "20px" }}>Logo</Link>
      <Link href="/dashboard" style={{ padding: "20px" }}>Dashboard</Link>
      <Link href="/signup" style={{ padding: "20px" }}>Sigup</Link>
      <Link href="/login" style={{ padding: "20px" }}>Login</Link>
    </nav>
  );
};

export default Navbar;
