import styled from "styled-components";
import {mobile} from "../responsive";
import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import {signInWithEmailAndPassword,getAuth} from "firebase/auth"


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/5380659/pexels-photo-5380659.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link1 = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  const navigate = useNavigate();
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const login = async (event) =>{
    event.preventDefault();
    const auth1 = getAuth();
    signInWithEmailAndPassword(auth1, loginUsername, loginPassword)
    .then((user)=>{
      
      navigate("/");
    }).catch((error)=>{alert(error.message)})
  };
  return (
    <Container>
      <Wrapper>
        <Title>LOG IN</Title>
        <Form onSubmit={login}>
          <Input value={loginUsername} placeholder="EMAIL" onChange={(event) => {setLoginUsername(event.target.value)}} />
          <Input value={loginPassword} type="password" placeholder="PASSWORD" onChange={(event) => {setLoginPassword(event.target.value)}}/>
          <Button>LOGIN</Button>
          <Link1>Forget Password</Link1>
          <Link1><Link to="/Register">CREATE A NEW ACCOUNT</Link></Link1>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
