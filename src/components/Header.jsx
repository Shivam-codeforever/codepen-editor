import styled from "@emotion/styled";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import logo from "../components/1 copy.png";
const Container = styled(AppBar)`
    background-color: black;
    color:white;
    height: 10vh;
    font-size: 1em;
`

export default function Header() {
  return (
    <>
      <Container position="static">
        <Toolbar style={{display:"flex",justifyContent:"space-between"}}>
          <img src={logo} alt="" style={{width:"4vw",height:"8vh",cursor:"pointer"}}/>
          <div className="nav" >
            <button className="btn">Save</button>
            <button className="btn">Settings</button>
            <button className="btn">Sign Up</button>
            <button className="btn">Log In</button>
          </div>
        </Toolbar>
      </Container>
    </>
  )
}
