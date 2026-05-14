import './globals.css';

export const metadata = {
  title: 'Digital Marketing Education',
  description: 'Learn digital marketing with practical lessons and tools.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
