import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    width: 100%;
    height: ${theme.grid.header};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
  `}
`;

export const LogoName = styled.h2`
  ${({ theme }) => css`
    font-family: 'Permanent Marker', cursive;
    font-size: ${theme.font.sizes.xxlarge};
    color: ${theme.colors.orange300};
    text-transform: uppercase;
  `}
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const MenuContainer = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;

export const MenuItem = styled.li`
  ${({ theme }) => css`
    width: 100%;
    list-style: none;
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.white100};

    & + li {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`;
