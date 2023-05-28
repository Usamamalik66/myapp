
import { AppBar, Toolbar, styled } from "@mui/material"
import { NavLink } from "react-router-dom"

let Header = styled(AppBar)`
background: #111111 ;

`
let Tabs = styled(NavLink)`

font-size: 18px;
margin-right: 30px;
color: inherit;
text-decoration: none;

`

let NavBar = () => {

    return (

        <Header position="static" >
            <Toolbar>
                <Tabs to='/'>Home Page</Tabs>
                <Tabs to='/all'>All User</Tabs>
                <Tabs to='/add'>Add User</Tabs>

            </Toolbar>
        </Header>
    )
}

export default NavBar;