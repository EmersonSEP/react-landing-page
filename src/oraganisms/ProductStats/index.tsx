import { CardActivity } from "../../molecules/CardActivity";
import * as S from "./styles";
import HeroImage from "../../assets/img/img-hero.png";
import { CardChart } from "../../molecules/CardChart";

export function ProductStats() {
  return (
    <S.Container>
      <CardActivity />
      <CardChart />
      <img src={HeroImage} alt="imagem mulher fazendo pesquisa" />
    </S.Container>
  );
}
