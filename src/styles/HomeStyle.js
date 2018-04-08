import styled from "styled-components";

export const MainDiv = styled.div`
    width: 100%;
`;

export const Div = styled.div`
    background-color: rgba(0, 0 ,0, 0.8);
    padding: 5px 10%;
`;

export const BodyDiv = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    background-color: rgba(255, 255 ,255, 0.9);
    padding: 20px;
    border: 2px solid #aaa;
    border-radius: 25px;
    margin-top: 10px;
    
    &:hover {
         box-shadow: 0px 0px 16px 0px rgba(255,255,255,0.2);
    }
`;

export const TitleDiv = styled.div`
    margin-left: auto;
    width: 250px;
    
`;

export const CCDiv = styled.div`
    display: inline-block;
`;


export const Korba = styled.h1`
    color: #ffacac;
    font-size: 60px;
    display: inline-block;
    &:hover {
        color: #ffc4c4;
    }
`;

export const H1CC = styled.h1`
    display: block;
    margin-top: -17px;
    padding: 0;
    &:hover {
        color: #ffffff;
    }
`;

export const NavBarUL = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    padding-right: 10%;
    overflow: hidden;
    background-color: rgba(0, 0 ,0, 0.8);
    position: sticky;
    top: 0;
    
    li {
       float: left;
    }

    li a {
        display: block;
        color: #ddd;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        border-bottom: 2px solid transparent;
    }
    
    .login,
    .register{
        float: right;
    }
    
    .login a {
        font-weight: bold;
        color: #fafafa;
    }
    
    .register a {
        font-weight: bold;
        color: #fafafa;
        background: #cc8989;
        border-radius: 10px;
    }
    
    .register a:hover {
        font-weight: bold;
        color: #cc8989;
        background: #fafafa;
        border-bottom: 2px solid transparent;
    }

    li a:hover {
        background-color: rgba(255, 255 ,255, 0.1);
        border-bottom: 2px solid #ddd;
        color: white;
    }
    li.dropdown {
        display: inline-block;
    }
`;

export const PacketDiv = styled.div`
     
    display: inline-block;
    border: 2px solid #cc8989;
    border-radius: 5px;
    background-color: #ddd;
    width: 30%;
    padding: 1%;
    text-align: center;
    margin: 1.6%;
    min-width: 250px;
    
    &:hover {
        box-shadow: 0 0 20px #ffacac;
        background: linear-gradient(to bottom, rgba(250,250,250,0.95) 0%,rgba(250,250,250,0.6) 100%), url(https://iv.pl/images/79693514785725769285.jpg) repeat center center;
    }
  
    
    h1 {
        color: #cc8989;
        font-size: 30px;
    }
    
    ul {
        list-style-type: none;
        padding: 3px;
        margin: 10px 0;
     }
     button {
     background-color: #cc8989;
      border: none;
      color: #fafafa;
      padding: 15px 32px;
      text-align: center;
     text-decoration: none;
      font-size: 16px;
      margin: 4px 2px;
      cursor: pointer;
      border-radius: 5px;
      font-weight: bold;
}

    button:hover {
        background: #fafafa;
        color: #cc8989;
        box-shadow: 0 0 10px #cc8989;
    }
`;