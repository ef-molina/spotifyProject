import styled from 'styled-components';

export const MenuItem = styled.div`
  display: flex;
  color: ${({ color }) => color};
  align-items: center;
  gap: 10px;
  height: 4rem;
  padding-right: ${({ pr }) => pr || '1.5rem'};
  padding-left: ${({ pl }) => pl || '0.6rem'};
  background: ${({ bg }) => bg};
  border-left: ${({ borderleft }) => borderleft};
  transition: all 300ms ease;
  cursor: pointer;

  &:hover {
    color: #17ab4d;
    padding-left: ${({ hoverleft }) => hoverleft || '1.2rem'};
    padding-right: ${({ hoverright }) => hoverright || '0.8rem'};
    transition: all 200ms ease-out;
  }
`;

export const MenuName = styled.h4`
  display: none;
  margin-right: 1rem;

  @media screen and (min-width: 1000px) {
    display: block;
  }
`;

export const MenuIcon = styled.span`
  font-size: 30px;
  display: flex;
  align-items: center;
`;
