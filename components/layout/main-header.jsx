import Link from "next/link";
import Logo from "./logo";
import classes from './main-header.module.css';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <ul>
        <li><Link href="/posts">Posts</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </header>
  );
};

export default MainHeader;
