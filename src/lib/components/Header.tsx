import { useTranslations } from "lib/hooks"
import styled from "styled-components"
import { Images } from "assets"
import { APP_CONFIG } from "lib/config"

export const Header=()=>{
    const T = useTranslations()

    return (
    <HeaderContainer>
        <LogoContainer>
            <Logo src={Images.Logo} />
                <Title>
                    {T.components.header.title}
                </Title>
        </LogoContainer>
        <LinkContainer>
            <Link 
                href={APP_CONFIG.GITHUB_URL}
                target="_blank">
                {T.components.header.github}
            </Link>
            <Link 
                href={APP_CONFIG.DISCORD_URL}
                target="_blank">
                {T.components.header.discord}
            </Link>
        </LinkContainer>
    </HeaderContainer>
    )}

const HeaderContainer=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    background-color: ${({theme})=>theme.colors.foreground};
    padding: 0 15px;
`

const LogoContainer=styled.div`
display: flex;
flex-direction: row;
align-items: center;
`
const Logo=styled.img`
width: 36px;
height: 36px;
margin-right: 10px;
`
const Title=styled.h1`
display: inline;
font-size: 20px;
color: ${({theme})=> theme.colors.typography}
`

const LinkContainer = styled.div`

`

const Link = styled.a`
    padding: 0 10px;
    color: ${({theme})=> theme.colors.typography};
    text-decoration: underline;
    cursor: pointer;
`