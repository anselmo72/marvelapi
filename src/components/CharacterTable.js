import React from 'react'
import CharacterItem from './CharacterItem'
import styled from 'styled-components'

const CharacterTable = ({ items, isLoading }) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <Contents className='contents'>
      {items.map((item) => (
        <CharacterItem key={item.id} item={item} />
      ))}
    </Contents>
  )
}

const Contents = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-top: 250px;
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

export default CharacterTable
