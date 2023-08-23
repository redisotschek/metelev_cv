import './globals.scss';
import Head from 'next/head';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>Cool Title</title>
        <meta
          name="description"
          content="Frontend Developer - Vue, Angular, React, SCSS, TypeScript"
          key="desc"
        />
        <meta property="og:title" content="Dima Metelev | Frontend Developer" />
        <meta
          property="og:description"
          content="Vue, Angular 2+, Next.js, SCSS, TypeScript"
        />
        <meta property="og:image" content="/images/thumbnail.png" />
      </Head>
      <body className={`body`}>{children}</body>
    </html>
  );
}
