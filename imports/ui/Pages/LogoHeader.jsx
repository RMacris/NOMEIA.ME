import React from "react";
import { useNavigate } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import { Meteor } from "meteor/meteor";

export const LogoHeader = () => {
  let navigate = useNavigate();

  function mostraTitulo(){
    document.getElementById("titulo").hidden = false;
    document.getElementById("nomeacoesPrivadas").hidden = true;
    document.getElementById("indisponibilidadePrivadas").hidden = true;
    document.getElementById("restricoesPrivadas").hidden = true;
    document.getElementById("menuPrivado").hidden = true;
    
  }

  function logout(){
    if(Meteor.user() != undefined){
      Meteor.logout();
    }
  }

  return (
    <Fragment>
       <img id="imgLogo" src="logo.png" style={{ marginLeft: "50px", width: "100px", cursor: "pointer" }} onClick={()=>{mostraTitulo(), navigate("/"), logout()}} />      
    </Fragment>
  );
};
