import styled from "styled-components";

export const Container = styled.div`
  width: 350px;
  height: 600px;
  margin: 0 auto;
  box-shadow: 0 5px 25px #00000035;
  border: 8px;
  position: relative;
  background-color: #EDEDED;
`;

export const ContainerScroll = styled.div`
    width: 100%;
    height: calc(100% - 132px);
    overflow: auto;
    position: absolute;
    bottom: 16px;
    left: 0;
`;

export const Header = styled.header`
  padding: 15px;
  background-color: blueviolet;
  border-radius: 0 0 20px 20px;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  &.list-item {
    background-color: white;
    margin-bottom: 6px;
    border-radius: 5px;
    box-shadow: 0 2px 10px 00000015;
  }
`;

export const TexInput = styled.input`
  height: 46px;
  border: 2px solid #c4c4c4;
  border-radius: 8px;
  padding-left: 16px;
  outline: none;
  &.w100 {
    flex: 1;
  }
  &:focus {
    border-color: blueviolet;
  }
`;

export const Button = styled.button`
  width: 46px;
  height: 46px;
  text-align: center;
  background-color: blueviolet;
  color: #fff;
  font-size: 24px;
  border: 2px solid white;
  border-radius: 8px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition-duration: 300ms;
  &:hover{
    background-color: #6720aa;
  }
  &.outline {
    border: 2px solid blueviolet;
    color: blueviolet;
    background-color: transparent;
    &.rounded {
      border-radius: 100%;
    }
  }
`;

export const TextH4 = styled.h4`
  line-height: 46px;
  flex: 1;
  font-family: Arial, Helvetica, sans-serif;
  padding-left: 10px;
`;
