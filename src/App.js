import Header from './components/Header'
import CharacterTable from './components/CharacterTable'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Search from './components/Search'
import styled from 'styled-components'
import GlobalStyles from './global-styles'

const hash = '852c409825f8cba171c190e3fd70fb3b'

function App() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetch = async () => {
      if (query === '') {
        const result = await axios(
          `http://gateway.marvel.com/v1/public/comics?ts=1&apikey=d7e7d98da1b128556340929fc7012bdd&hash=${hash}`
        )
        console.log(result.data.data.results)
        setItems(result.data.data.results)
        setIsLoading(false)
      } else {
        const result = await axios(
          `http://gateway.marvel.com/v1/public/comics?titleStartsWith=${query}&ts=1&apikey=d7e7d98da1b128556340929fc7012bdd&hash=${hash}`
        )
        console.log(result.data.data.results)
        setItems(result.data.data.results)
        setIsLoading(false)
      }
    }
    fetch()
  }, [query])

  return (
    <>
      <GlobalStyles />
      <MainHeader>
        <Header />
        <Search search={(q) => setQuery(q)} />
      </MainHeader>
      <Container>
        <CharacterTable items={items} isLoading={isLoading} />
      </Container>
    </>
  )
}

const MainHeader = styled.header`
  height: 30vh;
  width: 100%;
  background-color: rgba(207, 15, 15, 0.96);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 300px;
  right: 0;
  left: 0;
  z-index: 2;
`

const Container = styled.div`
  max-width: 1100px;
  margin: auto;
  padding: 0 20px;
`

export default App
