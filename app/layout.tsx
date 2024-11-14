import type { Metadata } from 'next';

import './globals.css';
import MainLayout from '@/Components/MainLayout';
import MenuContextProvider from '@/Context/MenuContext';

export const metadata: Metadata = {
  title: 'Zazai App',
  description: 'Create by Zazai',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MenuContextProvider>
          {' '}
          <MainLayout>{children}</MainLayout>
        </MenuContextProvider>
      </body>
    </html>
  );
}
