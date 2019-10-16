import React from "react";
import styled from "styled-components";

const Container = styled.div`
  
`;

const Logo = styled.img.attrs({
  src: "/donoteLogo.png",

})`

`;

// const UserDiv = styled.

const Header = () => {
  return (
    <Container>
      <Logo />

    </Container>
  );
};

export default Header;