import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 30px;
  width: 210px;
  height: 210px;
  border-radius: 18px;
  background-color: #fff;
  box-shadow: 0px 4px 4px 0px #00000040;
  padding: 33.6px 24.5px;
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  strong {
    font-weight: 500;
  }
`;

function generationSpan() {
  const amountBars = [...Array(12).keys()];
  let styleSpan: any = [];

  amountBars.forEach((item) => {
    styleSpan.push(`
      div:nth-child(${item + 1}) {
        div {
        background-color: #EFF3FE;
        height: 91px ;
        width: 2.1px;
        border-radius: 5px;
        display: flex;
        align-items: flex-end;
        flex-direction: colum;

        span {
            background-color: #5236ff;
            display: block;
            height: 0px;
            height: ${Math.ceil(Math.random() * 100)}px;
            width: 3.5px;
            border-radius: 5px;
        }
      }
      small {
        color: #baccfd;
        font-size:10px;
      }
    }

    `);
  });
  return styleSpan.join("");
}

export const Chart = styled.div`
  margin-top: 28px;
  ${generationSpan()}

`;
