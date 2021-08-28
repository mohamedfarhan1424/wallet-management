import { Button } from "@material-ui/core";
import React from "react";

function Wallet() {
  return (
    <div>
        
      <Button
        variant="contained"
        color="primary"
        onClick={() =>
          window.open(
            "https://payu.in/web/EC9C27781886F2CC7BB1E74638779705",
            "_self"
          )
        }
      >
        Add money to your wallet
      </Button>
      
    </div>
  );
}

export default Wallet;
