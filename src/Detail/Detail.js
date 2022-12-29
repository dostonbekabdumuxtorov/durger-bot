import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Fav from '../images/favicon.png';
import { Container, Image, Title, Wrapper } from './style';
const Detail = () => {
    const navigate = useNavigate()
    const Location = useLocation()
    window.Telegram.WebApp.MainButton.setText('Ortga qaytish')
    window.Telegram.WebApp.onEvent('mainButtonClicked', () => {
        navigate('/')
        window.Telegram.WebApp.MainButton.setText('Keyingisiga o`tish')

    })
    return (
        <Container>
            <Wrapper>
                <Title>Finished</Title>
                <p>{Location.state}</p>
                <Image src={Fav} />
            </Wrapper>
        </Container>
    )
}

export default Detail