import styled, { createGlobalStyle } from 'styled-components'
import { Buttons } from '../components/Todo/styles'
import variaveis from './variaveis'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`
export const ContainerMain = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`
export const TitleResult = styled.p`
  display: block;
  margin: 40px 0;
  font-weight: bold;
  font-size: 18px;
`

export const InputSearch = styled.input`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
  width: 100%;
`

export const ButtonSaved = styled(Buttons)`
  background-color: ${variaveis.verde};
`

export default GlobalStyle
