import styled from "styled-components";

export const Container = styled.div`
  width: 400px;
  background-color: #bbe6e4;
  padding: 10px;
  font: Roboto;
  color: black opacity(80%);
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: "center";
`;
export const Select = styled.select`
  height: 50px;
  margin-bottom: 10px;
  font-size: 18px;
  width: 394px;
`;

export const Card = styled.div`
  background-color: #fff;
  padding: 40px 10px 60px;
  text-align: center;
  border-radius: 10px;
  width: 380px;
`;
export const PokeImage = styled.div`
  border-radius: 50%;
  border: 1px solid grey;
  width: 293px;
  height: 293px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #c7c5c5;
  margin: 0 auto 20px auto;
`;

export const PokeName = styled.div`
  font-weight: 700;
  font-size: 40px;
  margin-bottom: 10px;
`;
export const PokeDescription = styled.p`
  font-weight: 400;
  font-size: 18px;
`;
export const PokeButtons = styled.button`
  background: #7d70ba;
  border-radius: 6px;
  width: 180px;
  height: 50px;
  border: 0;
  font-size: 18px;
  color: white;
  font-family: Roboto;
  margin-top: 308px;

  PokeButtons:disabled {
    cursor: not-allowed;
    opacity: 80;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
