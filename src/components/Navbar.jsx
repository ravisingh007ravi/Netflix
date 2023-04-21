import { AppBar, Toolbar, Tabs, Tab, styled, Button, useTheme, useMediaQuery } from '@mui/material';
import logo from '../Images/logo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Images = styled('img')({height: '50px'})

const pages = ['HollyWood', 'BollyWood', 'South', 'Anime', 'Pc Games'];

function Navbar() {

  const [value, setValue] = useState();
  

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const [openDrawer, setOpenDrawer] = useState();



  return (
    <AppBar sx={{ background: "#1a1a1a" }}>
      <Toolbar>
        <Link to='/'>
          <Images src={logo} alt="logo" />
        </Link>

        {
          isMatch ? (<>
            <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
              <List>

                {pages.map((page, index) => (

                  <ListItemButton onClick={() => setOpenDrawer(false)} key={index}>
                    <ListItemIcon>
                      <ListItemText>{page}</ListItemText>
                    </ListItemIcon>
                  </ListItemButton>

                ))}

              </List>
            </Drawer>
            <ListItemButton sx={{ color: "white", marginLeft: "auto" }} onClick={() => setOpenDrawer(!openDrawer)}>
              <MenuIcon />
            </ListItemButton>
          </>) : (
            <>
              <Tabs sx={{ marginLeft: "auto" }} textColor='inherit' value={value} onChange={(e, value) => setValue(value)} indicatorColor='secondary'>
                {
                  pages.map((page, index) => (
                   
                    <Tab key={index} label={page}></Tab>
                    
                  ))
                }
              </Tabs>
            </>
          )
        }

        <Button variant="contained" sx={{ marginLeft: "auto" }}>
          <Link to='/LogIn'>LogOut</Link>
        </Button>

      </Toolbar>
    </AppBar>
  )
}

export default Navbar
