import styles from "../page.module.css";
import Box from '@mui/material/Box';
import Nav from "../component/nav";

export default function Portfolio() {
  return (      
        <Box className={styles.outerWrap} component="section">
          <Box className={styles.innerWrap}>
            <Nav />
          </Box>
        </Box>
  );
}
