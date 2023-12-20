import styled from "styled-components"
import { Images } from "assets"

export const ExchangeLanguage=()=>{
    return (
        <Exchange src={Images.ExchangeIcon} />
    )
}

const Exchange =styled.img`
    cursor: pointer;
    width: 22px;
    height: 22px;
`