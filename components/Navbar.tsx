import Link from 'next/link';
import { FC } from 'react';

const Navbar: FC = () => (
	<nav className="navbar">
		<Link href="/">
			<a className="navbar-brand">Note App</a>
		</Link>
		<Link href="/new">
			<a className="create">Create Note</a>
		</Link>
	</nav>
);

export default Navbar;
