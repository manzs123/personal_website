import styles from "../page.module.css";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Nav from "../component/nav";

export default function About() {
  return (

        <Box className={styles.outerWrap} component="section">

          <Box className={styles.innerWrap}>
            <Nav />
          </Box>

        </Box>
  );
}
