import React, { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/footer';


interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='max-w-[1400px] mx-auto w-full'>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;