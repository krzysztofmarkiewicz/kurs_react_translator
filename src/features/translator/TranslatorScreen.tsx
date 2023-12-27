import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Confidence, ExchangeLanguage, Loader, SelectLanguage, TextCounter, TextInput, Message, } from "lib/components"
import { useSupportedLanguages } from "./useSupportedLanguages"
import { Language } from "lib/models"
import { useTranslations } from "lib/hooks"

export const TranslatorScreen: React.FunctionComponent=()=>{
    const T = useTranslations()
const [languages, setLanguages] = useState<Array<Language>>([])
const {isLoading, hasError, fetch: getSupportedLanguages}=
useSupportedLanguages(
    setLanguages
    )

useEffect(()=>{
    getSupportedLanguages(
    )
},[])
if(isLoading){
    return(
        <FetchLoaderContainer>
            <Loader>
                <LoaderText>
                    {T.screen.translator.loading}
                </LoaderText>
            </Loader>
        </FetchLoaderContainer>    )
}
if(hasError){
    return(
        <CenterContainer>
            <Message
                withButton
                message={T.screen.translator.error}
                onClick={()=> getSupportedLanguages()}
            />
        </CenterContainer>
    )
}
if(languages.length===0){
    return(
        <CenterContainer>
            <Message message={T.screen.translator.empty}/>
        </CenterContainer>
    )
}
    return (
        <Container>
            <TranslatorContainer>
                <InpuContainer>
                    <SelectLanguage />
                    <TextInput />
                    <LoaderContainer>
                        <Loader />
                    </LoaderContainer>
                    <InputFooter>
                        <Confidence />
                        <TextCounter />
                    </InputFooter>
                </InpuContainer>
                <ExchangeLanguage />
                <InpuContainer>
                    <SelectLanguage />
                    <TextInput />
                    <LoaderContainer>
                        <Loader />
                    </LoaderContainer>
                </InpuContainer>

            </TranslatorContainer>
        </Container>      
    )}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    color: ${({theme})=>theme.colors.typography}
`
const TranslatorContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 50px;

`
const InpuContainer=styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 5px;
`

const LoaderContainer=styled.div`
    padding: 5px 10px;
`
const FetchLoaderContainer=styled.div`
    width: 50%;
    display: flex;
    align-self: center;
`
const InputFooter=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const LoaderText=styled.div`
    color: ${({theme})=>theme.colors.typography};
    margin-top: 10px;
`

const CenterContainer= styled.div`
    display: flex;
    justify-content: center;
`