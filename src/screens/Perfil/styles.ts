import styled from 'styled-components/native';

export const WrapperContent = styled.View`
    margin: 5px 0px;
`;

export const WrapperPicture = styled.View`
    display: flex;
    gap: 10px;
    margin-bottom: 15px;
`;

export const Title = styled.Text`
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    letter-spacing: 0.04em;
    color: #026a6c;
`;

export const TextLabel = styled.Text`
    border: 0;
    border-radius: 10px;
`;

export const ContainerPerfil = styled.View`
    flex: 1;
    display: flex;
    width: 100%;
    flex-direction: column;
    height: fit-content;
    align-self: center;
    justify-self: center;
    padding: 1.5em;
    gap: 5px;
`;

export const Description = styled.Text`
    font-weight: 500;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: #000000;
`;
