import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function Nav() {
    return (
        <Box component="section" sx={{
          width: 'calc(100% - 40px)',
          height: '80px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px'
        }}>
            <Box>
              <a href="/">
                <img width="40px" src="/favicon.svg"></img>
              </a>
            </Box>
            <Box sx={{
              display: 'flex',
              gap: '20px',
            }}>
                <Button href="/about">About</Button>
                <Button href="/portfolio">Portfolio</Button>
                <Button variant="contained" href="/contact">Contact</Button>
            </Box>
        </Box>
    );
  }

  export default Nav;