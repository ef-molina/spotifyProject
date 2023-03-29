import styled from 'styled-components';

export const AppContainer = styled.div`
  /* border: 1px solid red; */
  display: grid;
  grid-template-rows: 1fr 8fr 1fr; //navbar, main, footer
  gap: 0.5rem;
  height: 100vh;
  min-width: 100vw;
`;

export const Flex = styled.div`
  display: flex;
  background: ${({ bg }) => bg};
  margin: ${({ mg }) => mg};
  border: ${({ border }) => border};
  height: ${({ height }) => height || '100%'};
  width: ${({ width }) => width || '100%'};
  gap: ${({ gap }) => gap || 'none'};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  flex-direction: ${({ direction }) => direction || 'row'};
  overflow-y: ${({ overflowY }) => overflowY};
  overflow-x: ${({ overflowX }) => overflowX};
  padding: ${({ padding }) => padding};
  overflow: ${({ overflow }) => overflow || 'auto'};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  /* grid-auto-rows: minmax(22%, 32%); */
  grid-auto-flow: row;
  height: fit-content;
  gap: 1rem;

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Button = styled.a`
  border-style: none;
  margin: 2rem;
  background-color: #17ab4d;
  border-radius: 3rem;
  padding: 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
  cursor: pointer;
  transition: 100ms linear;

  &:hover {
    opacity: 1;
  }

  &:active {
    transform: translateY(1.5px);
    transition: 100ms linear;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const StyledTrackVolumeSlide = styled.input`
  -webkit-appearance: none;
  background: rgba(255, 255, 255, 0.1);
  height: 0.3rem;
  outline: none;
  border-radius: 0.1rem;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 10px;
    width: 10px;
    border-radius: 10px;
    background: #dce1eb;
  }
`;
