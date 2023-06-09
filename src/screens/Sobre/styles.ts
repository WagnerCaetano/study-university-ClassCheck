import styled from 'styled-components/native';

export const Title = styled.Text`
    padding-left: 5%;
    font-weight: 500;
    font-size: 40px;
    display: flex;
`;

export const Texto = styled.Text`
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    display: flex;
    text-align: justify;
    margin-right: 5%;
    margin-left: 5%;
`;

export const TextoProfiles = styled.Text`
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    display: flex;
    text-align: justify;
    margin-right: 5%;
    margin-left: 3%;
`;

export const Profiles = styled.View`
    flex-direction: row;
    display: flex;
    align-items: center;
    margin-bottom: 5%;
`;
export const PersonImage = styled.Image`
    margin-left: 3%;
    width: 5em;
    height: 5em;
    border-radius: 15vw;
    object-fit: contain;
    border: 2px solid #026a6c;
`;

export const Separator = styled.View`
    align-items: center;
    margin-top: 10px;
    width: 90%;
    height: 1;
    background-color: #026a6d;
`;
