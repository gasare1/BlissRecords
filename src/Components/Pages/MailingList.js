import React, { useState, useEffect } from "react";
import { MailingHP, MailText } from "../styled-components/mailingelements";
import { TextField, Button } from "@material-ui/core";
import "../styled-components/maillist.css";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import image from "../../Images/mailist.jpg";
import Scrolltext from "./Scrolltext";
import { Redirect } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "black",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "purple",
    },
    "& .MuiOutlinedInput-input": {
      color: "black",
    },
    "&:hover .MuiOutlinedInput-input": {
      color: "black",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: "black",
    },
    "& .MuiInputLabel-outlined": {
      color: "black",
      FontSize: "70px",
    },
    "&:hover .MuiInputLabel-outlined": {
      color: "black",
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: "black",
    },
  },
});
export default function MailingList() {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [phone, setphone] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [PostId, setPostId] = useState("");
  const [redirect, setRedirect] = useState(false);

  function refreshPage(){
    window.location.reload();
} 
  const submit = async (e) => {
    e.preventDefault();
    await fetch(" http://127.0.0.1:5000/maillist ", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({

        "email": email,


      }),
    });

    setRedirect(true);
  };
  if (redirect) {
    return <Redirect to="maillist" />;
  }

  return (
    <MailingHP
      id="maillist"
      onSubmit={submit}
      className="contactbackground"
      style={{
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        display: "flex",
        backgroundImage: `url(${image})`,
        color: "white",
        overflow: "hidden",
      }}
    >
      <form onSubmit={submit}>
      <MailText style={{ marginTop: "100px" }}>
        <h1>BE THE FIRST TO KNOW ABOUT EXCLUSIVE ATLANTIC RECORDS UPDATES</h1>
        <TextField
          id="firstfield"
          style={{
            color: "white",

            marginTop: "20rem",
            height: "85px",
          }}
          sx={{ border: 1 }}
          className={classes.root}
          label="Your Email"
          variant="outlined"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          id="textfield"
          onClick={refreshPage}
          type='submit'
          style={{
            color: "black",
            marginTop: "19.8rem",
            marginLeft: "10px",
            height: "59px",
            borderColor: "white",
          }}
          variant="outlined"
          className={classes.root}
        >
          SIGN UP
        </Button>
        <Scrolltext />
      </MailText>
      </form>
    </MailingHP>
  );
}
