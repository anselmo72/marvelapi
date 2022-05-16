import styled from 'styled-components'

const CharacterItem = ({ item }) => {
  return (
    <Content>
      <img src={item.thumbnail.path + '/portrait_xlarge.jpg'} alt='' />
      <div className='description'>{item.title}</div>
    </Content>
  )
}

const Content = styled.div`
  cursor: pointer;
  background-color: transparent;
  height: 300px;
  position: relative;
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    overflow: hidden;
    z-index: 10;
  }
  .description {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 0px;
    margin-top: 300px;
    padding-top: 0px;
    padding-left: 10px;
    background: #fff;
    overflow: hidden;
    transition: all 0.5s ease;
    font-weight: bold;
  }
  &:hover .description {
    margin-top: 221px;
    height: 70px;
    padding: 10px;
    padding-top: 10px;
  }
`

export default CharacterItem
