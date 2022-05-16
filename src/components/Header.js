import logo from '../img/marvel_logo.png'
import styled from 'styled-components'

const Header = () => {
  return (
    <SecondHeader>
      <img src={logo} alt='' />
    </SecondHeader>
  )
}

const SecondHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 130px;
    margin-bottom: 30px;
    margin-top: 30px;
  }
`

export default Header
