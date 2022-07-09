import { CardActivity } from "../../molecules/CardActivity";
import * as S from "./styles";
import HeroImage from "../../assets/img/img-hero.png";

export function ProductStats() {
  return (
    <S.Container>
      <CardActivity />
      <img src={HeroImage} alt="imagem mulher fazendo pesquisa" />
    </S.Container>
  );
}
