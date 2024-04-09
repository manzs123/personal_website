import styles from "../page.module.css";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Nav from "../component/nav";

export default function Contact() {
  return (
    <html>
      <head>
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        <Box className={styles.outerWrap} component="section">
          <Box className={styles.innerWrap}>
            <Nav />
          </Box>
        </Box>
      </body>
    </html>
  );
}
