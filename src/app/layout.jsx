import '../index.css';

export const metadata = {
  title: 'Flutter Journey',
  description: 'A curated path to mastery for Flutter developers',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
