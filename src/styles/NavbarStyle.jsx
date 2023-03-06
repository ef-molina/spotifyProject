import styled from 'styled-components';

export const SearchInputField = styled.form`
  display: flex;
  max-height: 100%;
  border: 1rem;
  padding: 0.4rem 1rem;
  border-radius: 2rem;
  background-color: white;
  color: black;
  width: 30%;
  justify-content: space-between;
  align-items: center;
  border: 1px solid red;

  @media screen and (max-width: 999px) {
    width: 50%;
  }
`;

export const LargeLogo = styled.img`
  display: none;

  @media screen and (min-width: 1000px) {
    display: block;
  }
`;

export const SmallLogo = styled.img`
  display: none;

  @media screen and (max-width: 999px) {
    display: block;
  }
`;
