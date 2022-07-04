import Header from "../../oraganisms/Header";
import * as S from "./styles";

type FrontendProps = {
  children: React.ReactNode;
}

const Frontend = ({children}: FrontendProps) => {
  return (
  <S.Container>
  <Header />
  </S.Container>)
};

export default Frontend;