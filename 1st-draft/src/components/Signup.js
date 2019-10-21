import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Styled from "styled-components";
// import "./Login.css";

const Signup = props => {
  //state
  const [newUser, setNewUser] = useState({ username: "", password: "" , email: ""});

  const submitInfo = (event, creds) => {
    event.preventDefault();

    axios.post("http://localhost:8000/api/auth/register", creds)
        .then(res => {
            props.history.push("/api/cities");
        })
        .catch(err => console.log(err));
      }


  const handleNewUser = e => {
    const {name, value} = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  return (
    <div>
      <StyledForm onSubmit={e => submitInfo(e, newUser)}>
        <StyledH3>Sign up!</StyledH3>
        <Label>username</Label>
        <StyledInput
          type="text"
          value={newUser.username}
          name="username"
          onChange={handleNewUser}
        />
        <Label>password</Label>
        <StyledInput
          type="text"
          value={newUser.password}
          name="password"
          onChange={handleNewUser}
        />

        <StyledInput
          type="email"
          value={newUser.email}
          name="email"
          onChange={handleNewUser}
        />
        <StyledButton>Join the club!</StyledButton>
        <StyledParagraph>
          Already part of the Vacation-Planner community?{" "}
          <Link to="/">Log in</Link>
        </StyledParagraph>
      </StyledForm>
    </div>
  );
};


export default Signup;



//styles

const StyledForm = Styled.form`
    padding: 0 30px 25px 30px;
    width: 300px;
  margin: 0 auto;
  position: relative;
  text-align: left;
  background: #f3f3f3;
  border: 1px solid #fff;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Label = Styled.label`
    text-align: center;
`;
const StyledInput = Styled.input`
width: 188px;
padding: 10px 25px;
margin: 0 auto;
font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue",
  Helvetica, Arial, "Lucida Grande", sans-serif;
font-weight: 400;
height: 30px;
color: #9d9e9e;
text-shadow: 1px 1px 0 rgba(256, 256, 256, 1);
background: #fff;
border: 1px solid #fff;
border-radius: 5px;
box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
-moz-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
-webkit-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
`;

const StyledH3 = Styled.h3`
text-align:center
`;

const StyledButton = Styled.button`
background: #28d;
border-color: transparent;
color: #fff;
cursor: pointer;
width: 80%
margin: 0 auto;
margin-top:25px;
font-weight:bold;
font-size:14px;
height:50px;
border-radius:5px
&:hover{
  background:skyblue
}
`;

const StyledParagraph = Styled.div`
text-align: center;
margin-top:15px
`;