// import React from 'react'
import { ThemeProvider} from "styled-components"
import {theme} from 'lib/styles'
import { TranslatorScreen } from "features/translator"

export const App = ()=>(
    <ThemeProvider theme={theme}>
       <TranslatorScreen />
    </ThemeProvider>
)

// const AppContainer = styled.div`
//     width: 100%;
//     height: 50vh;
//     background-color: ${({theme})=>theme.colors.background};
// `