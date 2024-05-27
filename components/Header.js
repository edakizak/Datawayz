import Link from "next/link";

const Header = () => (
  <header>
    <div className="logo">
      <img src="/images/Datawayz-logo1.png" alt="Datawayz Logo" />
    </div>
    <nav>
      <ul>
        <li>
          <Link href="/demos">Demos</Link>
        </li>
        <li>
          <Link href="/pages">Pages</Link>
        </li>
        <li>
          <Link href="/support">Support</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
    <button className="explore-more">Explore more</button>
  </header>
);

export default Header;
