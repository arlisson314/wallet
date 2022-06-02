import styled from 'styled-components';

export const MainLogin = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 12%;
  height: 80%;
  weight: 80%;

   & img {
    width: 20%;
    height: 40vh;
    left: 450px;
    bottom: 246px;
    background-color: black;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
   }
`;

export const FormLogin = styled.form`
  width: 25%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

    & label {
      margin-top: 40;
      font-weight: bold;
      font-size: 20px;
      color: rgb(113, 116, 253)

    }
  
    & input { 
      display: flex;
      width: 95%;
      height: 40%;
      margin-bottom: 20px;
      font-size: 18px;
      font-weight: bold;
      border-radius: 3px;
    }

    & button {
      background-color: rgb(113, 116, 253) ;
      border-radius: 5px;
      font-weight: bold;
      border: none;
      height: 40px;
      width: 100px;
      color: #fff;
      margin-top: 10px;
        &:hover {
          transition: 0.3s;
          background-color: rgb(113, 116, 245);
          cursor: pointer;
        }
        &:disabled {
        background: #999;
        color: #555;
        cursor: not-allowed;
        }
    }

`;
