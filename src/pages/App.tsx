import ButtonConstact from "../atoms/ButtonContact";
import Frontend from "../templates/Frontend";
import * as S from "./styled";
import HeroImage from "../assets/img/img-hero.png";
import { CardActivity } from "../molecules/CardActivity";

function App() {
  return (
    <Frontend>
      <S.Container>
        <div>
          <h1>Design driven development of your web product</h1>
          <h6>
            We are a full service digital agency that builds immesive user
            experience.
          </h6>
          <ButtonConstact />
        </div>
        <div>
          <S.ColumnImage>
            <CardActivity />
          </S.ColumnImage>
        </div>
        <div>
          <img src={HeroImage} alt='imagem mulher fazendo pesquisa'/>
        </div>
      </S.Container>
    </Frontend>
  );
}

export default App;
