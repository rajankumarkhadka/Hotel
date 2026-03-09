import { Metadata } from 'next';
import { CartProvider } from '../context/CartContext';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { CartDrawer } from '../components/layout/CartDrawer';
import '../index.css'; // Make sure this path corresponds to your CSS file

export const metadata: Metadata = {
  title: 'Hotel Website',
  description: 'Welcome to our modern hotel',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-bg text-text-primary">
        <CartProvider>
          <div className="min-h-screen">
            <Navbar />
            <CartDrawer />
            {children}
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
