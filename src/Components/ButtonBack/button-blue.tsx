import arrow from '../../assets/Vector-blue.svg';
import styled from "styled-components";

const Button = styled.img`
    position: absolute;
    top: 21px;
    left: 12px;
`

export default function ButtonBack() {
    return(
        <Button src={arrow}></Button>
    )
}
