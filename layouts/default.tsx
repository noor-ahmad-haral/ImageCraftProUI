<<<<<<< HEAD
import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
=======
// import { Navbar } from "@/components/navbar";
// import { Link } from "@nextui-org/link";
// import { Head } from "./head";

// export default function DefaultLayout({
// 	children,
// }: {
// 	children: React.ReactNode;
// }) {
// 	return (
// 		<div className="relative flex flex-col h-screen">
// 			<Head />
// 			<Navbar />
// 			<main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
// 				{children}
// 			</main>
// 			<footer className="w-full flex items-center justify-center py-3">
// 				<Link
// 					isExternal
// 					className="flex items-center gap-1 text-current"
// 					href="https://nextui-docs-v2.vercel.app?utm_source=next-pages-template"
// 					title="nextui.org homepage"
// 				>
// 					<span className="text-default-600">Powered by</span>
// 					<p className="text-primary">NextUI</p>
// 				</Link>
// 			</footer>
// 		</div>
// 	);
// }
>>>>>>> a0c36d291860589e46f00f9bebe87b7586bf8fd3
