import "./globals.css";


export const metadata = {
  title: "Home - Manuel Macayan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>{children}</body>
      <script type="text/javascript" src="./script.js"/>
    </html>
  );
}
