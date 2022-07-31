import styled from "styled-components";


export const Form = styled.form`
  display: flex;
  flex-direction: column;

  justify-content: center;

  width: 17em;
  max-width: 17em;
  height: 50vh;
  padding: 20px;
  gap: 10px;

  background-color: ${(props) => props.theme.color.primary};

  text-align: center;
  font-weight: 700;

  border-radius: 15px;
  box-shadow: 3px 3px 5px ${(props) => props.theme.color.secondary};

  @media only screen and (max-width: 600px) {
    width: 300px;
    max-width: 300px;
  }
`;

export const Container = styled.main`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;


export const HiperLink = styled.a`
    color:${props => props.theme.color.light};
    text-decoration:none;
    font-weight: 300;
`

export const Title = styled.h1`
color:${props => props.theme.color.light};
`