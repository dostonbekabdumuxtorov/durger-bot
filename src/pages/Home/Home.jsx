import React, { useState } from 'react'
import { Add, Badge, Box, Container, Image, MinusBtn, Name, PlusBtn, Price, Row, Row1, Wrapper } from './style'
import { Products } from '../../data/data';
import { Skeleton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Burger from '../../images/burger.gif';

const Home = () => {
  const navigate = useNavigate()
  const [word, setword] = useState('');

  let [actived, setactived] = useState([]);
  const [render, setrender] = useState(false);
  const [isloading, setisloading] = useState(true)

  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let tg = window.Telegram.WebApp;
  tg.expand();

  console.log("main",{user:window.Telegram,data:actived})

  

  function Deleting(item) {
    let target = actived.indexOf(item);
    actived.splice(target, 1)
    setrender(!render)
    if(actived?.length===0){
      window.Telegram.WebApp.MainButton.hide()
    }
  }

  // window.Telegram.WebApp.onEvent('mainButtonClicked', () =>{

  // })
  window.Telegram.WebApp.onEvent("mainButtonClicked",function(){
    // setword(`worded ${tg?.initDataUnsafe?.user?.first_name}`)
    // navigate('/detail',{state:tg?.initDataUnsafe?.user?.first_name})
    tg.sendData( {
      id:1,
      name:'Burger',
      img:Burger,
      price:2.1
  });
  })

  function Adding(product) {
    console.log('window.Telegram', window.Telegram)
    window.Telegram.WebApp.MainButton.show()
    window.Telegram.WebApp.MainButton.setText('Keyingisiga o`tish')
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
        word:{word}
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