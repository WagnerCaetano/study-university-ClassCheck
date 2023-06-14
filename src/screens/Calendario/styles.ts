import styled from 'styled-components/native';

export const Card = styled.Image`
    width: 100%;
`;

export const ButtonBack = styled.Button``;

export const Titulo = styled.Text`
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    letter-spacing: 0.04em;
    color: #ffffff;
    text-transform: uppercase;
`;
export const Subtitulo = styled.Text`
    font-weight: 400;
    font-size: 16px;
    color: #ffffff;
    margin-top: 5%;
    margin-bottom: 8%;
`;
export const Presenca = styled.Text`
    font-weight: 400;
    font-size: 20px;
    color: #ffffff;
    align-items: center;
    margin: auto;
`;
export const Detalhes = styled.Text`
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 190.1%;
    color: #ffffff;
    text-align: center;
`;

export const Container = styled.View`
    flex: 1;
    display: flex;
    width: 100%;
    flex-direction: column;
    height: fit-content;
    align-self: center;
    justify-self: center;
    padding: 1.5em;
    background: #32c2b9;
`;
export const GreenSquare = styled.View`
    background-color: green;
    width: 30px;
    height: 30px;
    border-radius: 5px;
    margin-left: 5%;
`;