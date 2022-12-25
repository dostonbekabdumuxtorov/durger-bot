import React from 'react'
import { useNavigate } from 'react-router-dom'
import Fav from '../images/favicon.png';
import { Container, Image, Title, Wrapper } from './style';
const Detail = () => {
    const navigate = useNavigate()
    window.Telegram.WebApp.MainButton.setText('Ortga qaytish')
    window.Telegram.WebApp.onEvent('mainButtonClicked', () => {
        navigate('/')
        window.Telegram.WebApp.MainButton.setText('Keyingisiga o`tish')

    })
    return (
        <Container>
            <Wrapper>
                <Title>Finished</Title>
                <Image src={Fav} />
            </Wrapper>
        </Container>
    )
}

export default Detail