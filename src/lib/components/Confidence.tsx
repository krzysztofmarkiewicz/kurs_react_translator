import styled from "styled-components"

export const Confidence=()=>{
    return(
        <ConfidenceContainer>
            <Percentage>
                60%
            </Percentage>
            <Language>
                (Polish)
            </Language>
        </ConfidenceContainer>
    )
}

const ConfidenceContainer=styled.div`
    
`
const Percentage=styled.span`
    color: ${({theme})=> theme.colors.primary};
`
const Language=styled.a`
    cursor: pointer;
    text-decoration: underline;
    margin-left: 5px;
    color: ${({theme})=> theme.colors.primary};
`