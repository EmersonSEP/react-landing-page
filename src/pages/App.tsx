import ButtonConstact from "../atoms/ButtonContact";
import Frontend from "../templates/Frontend";
import { ProductInformation } from "../oraganisms/ProductInformation";
import { ProductStats } from "../oraganisms/ProductStats";
import * as S from "./styled";

function App() {
  return (
    <Frontend>
      <S.Container>
        <ProductInformation />
        <ProductStats />
      </S.Container>
    </Frontend>
  );
}

export default App;
