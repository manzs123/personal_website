import styles from "./page.module.css";
import Box from '@mui/material/Box';
import Nav from './component/nav';
import Typography from '@mui/material/Typography'



export default function Home() {
  return (

        <Box className={styles.outerWrap} component="section">

          <Box className={styles.innerWrap}>
            <Nav />
            <Box className={styles.flexHori}>
              <Box className={styles.homeHeading}>
                <Typography variant="h3"><b>Hi.</b></Typography>
                <Typography variant="h5">I am Manuel Macayan, a Multimedia Designer specialized in UI/UX Design.</Typography>
              </Box>
              <Box>
                <img width="320px" src="/favicon.svg"></img>
              </Box>
            </Box>
          </Box>

          
        </Box>

  );
}
