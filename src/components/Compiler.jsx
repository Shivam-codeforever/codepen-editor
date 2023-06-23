import { useContext ,useState ,useEffect} from "react";
import { DataContext } from "../context/DataProvider";

import { Box  } from "@mui/material";

const Compiler = () => {
  const code = useContext(DataContext);

  const [src , setSrc] = useState('This is your compiler');



  const srcCode = `
        <html>
            <body>${code.html}</body>
            <style>${code.css} </style>
            <script>${code.js}</script>
        </html>
    `
  useEffect(()=>{
    const timeout = setTimeout(()=>{
        setSrc(srcCode);
    }, 1500)

    return () => clearTimeout(timeout);
  }, [code.html, code.css, code.js]);

  return (
    <>
      <Box className="main">
        <iframe
          srcDoc={src}
          title="Output"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
        />
      </Box>
    </>
  );
};

export default Compiler;
