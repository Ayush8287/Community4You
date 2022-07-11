import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";
import {createUserWithEmailAndPassword,getAuth} from "firebase/auth"
import { auth } from "../config/firebase"


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/5473337/pexels-photo-5473337.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
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
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
const Link1 = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  color: black;
`;

const Register = () => {
  const navigate = useNavigate();
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [registerLastName,setRegisterLastName] = useState("");
  const [registerEmail,setRegisterEmail] = useState("");
  const [registerConfirmPassword,setRegisterConfirmPassword] = useState("");

  const register = async (event) =>{
    event.preventDefault();
    try{
      if(registerPassword!==registerConfirmPassword){
        alert("Password don't match");
        return;
      }
      if(registerPassword.length<6){
        alert("Weak Password");
        return;
      }
      const auth2 = getAuth();
    const user = await createUserWithEmailAndPassword(auth2, registerEmail, registerPassword);
    console.log(user);
    console.log(auth2);
    navigate("/")
    }catch(error){
      alert(error.message);

    }
  };
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={register}>
          <Input value={registerName} placeholder="NAME" required onChange={(event) => {setRegisterName(event.target.value)}}/>
          <Input value={registerLastName} placeholder="LAST NAME" required onChange={(event) => {setRegisterLastName(event.target.value)}} />
          <Input value={registerUsername} placeholder="USERNAME" required onChange={(event) => {setRegisterUsername(event.target.value)}} />
          <Input value={registerEmail} type="email" required placeholder="EMAIL" onChange={(event) => {setRegisterEmail(event.target.value)}} />
          <Input value={registerPassword} type="password" required placeholder="PASSWORD" onChange={(event) => {setRegisterPassword(event.target.value)}}/>
          <Input value={registerConfirmPassword} type="password"required placeholder="CONFIRM PASSWORD" onChange={(event) => {setRegisterConfirmPassword(event.target.value)}}/>
          <Link1><Link to="/Login">Already have a account</Link></Link1>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button >CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
