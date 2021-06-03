import * as S from './styles';

const Header = () => {
  return (
    <S.Container>
      <S.Content>
        <S.LogoName>Junior</S.LogoName>

        <S.Nav>
          <S.MenuContainer>
            <S.MenuItem>Home</S.MenuItem>
            <S.MenuItem>Sobre mim</S.MenuItem>
            <S.MenuItem>Pesquisar</S.MenuItem>
          </S.MenuContainer>
        </S.Nav>
      </S.Content>
    </S.Container>
  );
};

export default Header;
