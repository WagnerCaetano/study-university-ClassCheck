import styled from "styled-components";
import image from './Foto.png';

const Photo = styled.img`
    position: absolute;
    width: 200px;
    height: 200px;
    left: 88px;
    top: 109px;
    border-radius: 50%;
    border: 4px solid #6DAE86;
`

export default function ProfilePicture() {
    return(
        <Photo src={image}></Photo>
    )
}
