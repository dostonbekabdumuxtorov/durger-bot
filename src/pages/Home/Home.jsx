import React, { useState } from 'react'
import { Add, Box, Container, Image, MinusBtn, Name, PlusBtn, Price, Row, Row1, Wrapper } from './style'
import { Products } from '../../data/data';

const Home = () => {
  const [actived, setactived] = useState([])

  


  function Adding(product){
    setactived([...actived,product])
  }

  function Buttons(condition) {
    let isContained = actived.some((item) => {
      return item.id===condition.id
    })

    if(!isContained){
      return <Add onClick={()=>Adding(condition)}>Add</Add>
    }else{
      return (
        <Row1>
          <MinusBtn>-</MinusBtn>
          <PlusBtn>+</PlusBtn>
        </Row1>
      )
    }
  }

  return (
    <Container>
      <Wrapper>
        {
          Products.map((item, i) => (
            <Box key={i}>
              <Image src={item.img} />
              <Row>
                <Name>{item.name}</Name>
                <Price>{item.price}$</Price>
              </Row>
              {
                Buttons(item) 
              }
            </Box>
          ))
        }
      </Wrapper>
    </Container>
  )
}

export default Home