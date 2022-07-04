import Button from "../../atoms/Button";
import Logo from "../../molecules";
import Menu from "../Menu";
import * as S from "./styles"

const Header = () => {
  return <S.Box>
    <Logo />
    <Menu />
    <Button />
  </S.Box>
}

export default Header;