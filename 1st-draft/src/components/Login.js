import React, { useState } from "react";

import Styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = props => {

    const [ returningUser, setReturningUser ] = useState({ username: "", password: ""});

    const handleReturningUser = e => {
        const { name, value } = e.target;
        setReturningUser({...returningUser, [name]: value})
    }

    const submitReturningUser = (e, creds) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/auth/login", creds)
            .then(res => {
                props.history.push("/usercities");
                localStorage.setItem("token", res.data.token);
            })
            .catch(err => console.log(err));
    }

    
  return (
    <div>
      <h2>Login page</h2>
      <StyledForm onSubmit={e => submitReturningUser(e, returningUser)}>
        <StyledH3>Sign in here.</StyledH3>
        <Label>Username</Label>
        <StyledInput
          name="username"
          value={returningUser.username}
          onChange={handleReturningUser}
        />
        <Label>password</Label>
        <StyledInput
          name="password"
          value={returningUser.password}
          onChange={handleReturningUser}
        />
        <StyledButton>Log in</StyledButton>
        <StyledParagraph>
          No account? No worries! Sign up <Link to="/signup">here</Link>.
        </StyledParagraph>
      </StyledForm>
    </div>
  );
};


export default Login;

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
font-size: 14px;
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