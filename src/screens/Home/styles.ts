// create a button with styled component
import styled from 'styled-components/native';

export const PersonImage = styled.Image`
    width: 5em;
    height: 5em;
    border-radius: 15vw;
    object-fit: contain;
    border: 2px solid #026a6c;
`;
export const Row = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const Heading = styled.Text`
    font-size: 18px;
    font-weight: 700;
    color: #026a6c;
`;

export const Paragraph = styled.Text`
    font-size: 14px;
    font-weight: 100;
    color: #000;
`;

export const TextoHome = styled.Text`
    color: #026a6c;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.04em;
`;

export const Column = styled.View`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 5px;
`;

export const Wrapper = styled.View`
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding-left: 1.5em;
    padding-right: 1.5em;
`;

export const ButtonContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

export const GradientedButton = styled.TouchableOpacity`
    width: 45vw;
    height: 25vh;
    border-radius: 10%;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.bgColor};
`;

export const ButtonText = styled.Text`
    color: #ffffff;
    font-size: 20px;
`;
