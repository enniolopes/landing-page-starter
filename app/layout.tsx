import "./globals.css";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="und">
      <body>{children}</body>
    </html>
  );
}
