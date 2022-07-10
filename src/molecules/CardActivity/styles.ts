import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 105px;
  left: 75px;
  background-color: #daaaff;
  color: #fff;
  width: 154px;
  height: 77px;
  border-radius: 12px;
  text-align: left;
  padding: 11px;
  overflow: hidden;
  small {
    font-size: 15px;
  }
  div {
    display: flex;
    align-items: center;
    span {
      font-size: 23px;
      font-weight: 400;
      margin-right: 5px;
    }
  }
`;
