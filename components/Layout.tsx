import React, { FC } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';

const Layout: FC = ({ children }) => (
	<>
		<Head>
			<title>Notes App</title>
		</Head>
		<Navbar />
		{children}
	</>
);

export default Layout;
