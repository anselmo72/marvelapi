import { useState } from 'react'
import styled from 'styled-components'

const Search = ({ search }) => {
  const [text, setText] = useState('')

  const onSearch = (q) => {
    setText(q)
    search(q)
  }
  return (
    <SearchBox>
      <form>
        <input
          type='text'
          className='form-control'
          placeholder='Find a comic book'
          autoFocus
          onChange={(e) => onSearch(e.target.value)}
          value={text}
        />
      </form>
    </SearchBox>
  )
}

const SearchBox = styled.section`
  height: 100px;
  width: 600px;
  input[type='text'] {
    display: block;
    padding: 10px;
    font-size: 20px;
    border: 0;
    width: 500px;
    margin: auto;
  }
`

export default Search
