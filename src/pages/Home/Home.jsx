import React, { useState } from 'react'
import { Add, Badge, Box, Container, Image, MinusBtn, Name, PlusBtn, Price, Row, Row1, Wrapper } from './style'
import { Products } from '../../data/data';
import { Skeleton } from '@mui/material';

const Home = () => {
  let [actived, setactived] = useState([]);
  const [render, setrender] = useState(false);
  const [isloading, setisloading] = useState(true)
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  function Deleting(item) {
    let target = actived.indexOf(item);
    actived.splice(target, 1)
    setrender(!render)
  }

  function Adding(product) {
    console.log('window.Telegram', window.Telegram)
    window.Telegram.WebApp.MainButton.show()
    window.Telegram.WebApp.MainButton.setText('Dostonbek iltimos')
    setactived([...actived, product]);

  }

  function Buttons(condition) {
    let isContained = actived.some((item) => {
      return item.id === condition.id
    })

    if (!isContained) {
      return (
        <Add onClick={() => Adding(condition)}>
          Add
        </Add>
      )
    } else {
      return (
        <Row1>
          <MinusBtn onClick={() => Deleting(condition)}>-</MinusBtn>
          <PlusBtn onClick={() => Adding(condition)}>+</PlusBtn>
        </Row1>
      )
    }
  }


  function Badgeed(item) {
    let num = actived.filter((r) => {
      return r.id === item.id
    })
    if (num?.length === 0) {
      return null
    } else {
      return <Badge>{num.length}</Badge>
    }
  }

  setTimeout(() => {
    setisloading(false)
  }, 3000);

  return (
    <Container>
      <Wrapper>
        {!isloading ?
          Products.map((item, i) => (
            <Box key={i}>
              {Badgeed(item)}
              <Image src={item.img} />
              <Row>
                <Name>{item.name}</Name>
                <Price>{item.price}$</Price>
              </Row>
              {
                Buttons(item)
              }
            </Box>
          )) :
          arr.map((item, inde) => (
            <Skeleton
              key={inde}
              height={'250px'}
              width={'110px'}
              animation="wave"
            />
          ))
        }
      </Wrapper>
    </Container>
  )
}

export default Home