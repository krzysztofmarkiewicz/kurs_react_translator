import { useTranslations } from "lib/hooks"
import styled from "styled-components"
import { APP_CONFIG } from "lib/config"


export const Footer=()=>{
    const T = useTranslations()
    const actualYear= new Date().getFullYear()
   return( 
        <FooterContainer>
            <CodemaskContainer>
                &copy; {actualYear} {T.companyName}
            </CodemaskContainer>
            <LinkContainer>
                <Link 
                    href={APP_CONFIG.FLATICON_URL}
                    target="_blank">
                    {T.components.footer.flatIcon}
                </Link>
                <Link
                    href={APP_CONFIG.LIBRETRANSLATE_URL}
                    target="_blank">
                    {T.components.footer.libreTranslate}
                </Link>
            </LinkContainer>
        </FooterContainer>)
}

const FooterContainer=styled.div`
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    background-color: ${({theme})=>theme.colors.foreground}
`

const CodemaskContainer = styled.div`
    color: ${({theme})=>theme.colors.typography}
    
`
const LinkContainer = styled.div`
    
`
const Link = styled.a`
    padding: 0 10px;
    color: ${({theme})=> theme.colors.typography};
    text-decoration: underline;
    cursor: pointer;
`