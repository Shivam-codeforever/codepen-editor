import Editor from "./Editor";
import { useContext } from "react";
import { DataContext } from "../context/DataProvider";
// import { useState } from "react";

const Code = () => {
  const Main = useContext(DataContext);
  return (
    <>
      <div className="container">
        <Editor
          value={Main.html}
          onChange={Main.setHtml}
          className="editor"
          color="#FF3C41"
          icon="/"
          mode="xml"
          name="HTML"
        />
        <Editor
          value={Main.css}
          onChange={Main.setCss}
          className="editor"
          color="#0EBEFF"
          icon="*"
          mode="css"
          name="CSS"
        />
        <Editor
          value={Main.js}
          onChange={Main.setJs}
          className="editor"
          color="#FCD000"
          icon="( )"
          mode="js"
          name="JS"
        />
      </div>
    </>
  );
};

export default Code;
