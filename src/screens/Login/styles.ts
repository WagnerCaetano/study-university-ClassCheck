import styled from 'styled-components/native';
import img from './../../assets/Images/fundocolorido.png';

export const ColorfulBackground = styled.View`
    height: 100vh;
    width: 100vw;
    flex: 1;
    object-fit: contain;
    background-image: url(${img});
`;

export const LoginContainer = styled.View`
    display: flex;
    flex-direction: column;
    gap: 15px;
    position: absolute;
    top: 250px;
    padding: 40px;
    width: 100%;
    background-color: white;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    min-height: calc(100vh - 250px);
`;

export const LoginButton = styled.TouchableOpacity`
    border-radius: 10px;
    border: 0;
    padding: 10px;
    width: 70%;
    align-self: center;
    background-color: #026a6d;
    color: white;
    font-size: 32px;
    text-align: center;
`;

export const LoginButtonText = styled.Text`
    font-size: 32px;
    color: white;
`;

export const Input = styled.TextInput`
    width: 100%;
    top: ${(props) => props?.top};
    border: 0;
    background: #9688882b;
    border-radius: 10px;
    font-size: 15px;
    padding: 10px;
`;

export const LabelText = styled.Text`
    margin-top: 15px;
    font-size: 20px;
`;
