import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
const Header = () =>{
return <>
   <div className="header">
    <h3 >💡  Google Keep
    <div className="group">
    <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      </div>
      </h3>
    </div>
</>
};
export default Header;