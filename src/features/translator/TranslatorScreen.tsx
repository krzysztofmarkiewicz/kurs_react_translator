import React from "react"
import styled from "styled-components"
import { Confidence, ExchangeLanguage, Loader, SelectLanguage, TextCounter, TextInput } from "lib/components"

export const TranslatorScreen: React.FunctionComponent=()=>{

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

const InputFooter=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
