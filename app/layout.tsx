import './globals.css';
import { Providers } from '@/components/providers';

export const metadata = {
  title: 'Digital Marketing Education',
  description: 'Learn digital marketing with practical lessons and tools.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
