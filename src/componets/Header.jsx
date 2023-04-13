import React from "react";
import "./Header.css";
import { Button } from "./UI/button/Button";

export const Header = ({ openModalHendler }) => {

  return (
    <div>
    
      <header>
        <h1>Favorite Movie</h1>
     
        <Button
          bgColor={"rgb(227, 165, 31)"}
          width={"130px"}
          height={"40px"}
          onClick={openModalHendler}
        >
          ADD MOVIE
        </Button>
     
      </header>

    </div>
  );
};
