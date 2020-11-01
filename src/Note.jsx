import React from "react";
import DeleteIcon from '@material-ui/icons/Delete'
import { Button } from "@material-ui/core";

const Note = () =>{

    return  <>
    <div className="card1">
      <h1>title</h1><br />
      <p>this is he content</p>
      <Button >
       <DeleteIcon /></Button></div>
        </>;
};
export default Note;