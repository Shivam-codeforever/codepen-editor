import { Box, styled } from "@mui/material";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import { Controlled as ControlledEditor } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";

import { useState } from "react";

const Container = styled(Box)`
  flex-grow: 1;
  flex-basis:0;
  display:flex;
  flex-direction:column;
  padding: 0 8px 8px 8px;
`
const Heading = styled(Box)`
  display: flex;
  align-items: center;
  background: #1d1e22;
  padding: 5px 10px;
  width: 10vw;
  height: 8vh;

`;
const Header = styled(Box)`
  display: flex;
  background: #060606;
  align-items: center;
  color: white;
  justify-content: space-between;
  height:8vh;
`;

const Editor = ({icon , value , color , onChange , name}) => {
  const handleChange = (editor , data , value) =>{
    onChange(value);
  }

  const [main, setMain ]= useState(true);

  return (
    <>
      <Container style={main ? null : {flexGrow: 0}}>
        <Header>
          <Heading>
            <Box
              component="span"
              style={{
                backgroundColor: `${color}`,
                width: 20,
                height: 25,
                display: "flex",
                borderRadius: "4px",
                margin: "4px",
                justifyContent: "center",
                alignItems: "center",
                color: "black"
              }}
            >
            {icon}
            </Box>
            {name}
          </Heading>
          <CloseFullscreenIcon style={{cursor:'pointer'}}
          fontSize='small'
          onClick={()=>{setMain(prevState => !prevState)}}
          />
        </Header>
        <ControlledEditor className="controlled-editor"
        value={value}
        onBeforeChange= {handleChange}
         options={
          {
            theme:'material',
            lineNumbers:true
          }
        }

        />
      </Container>
    </>
  );
};

export default Editor;

