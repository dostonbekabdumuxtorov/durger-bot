import styled from "styled-components";

import {MAINBACKGROUND} from '../constants/colors'

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: ${MAINBACKGROUND};
    min-height: 100vh;
`

export const Wrapper = styled.div`
    width: 100%;
    max-width: 400px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
`

export const Title = styled.h1`
    font-size: 33px;
    color: #fff;
    margin-top:10px;
    margin-bottom:10px;
    font-family: 'Carter One';
`

export const Image = styled.img`
    width: 200px;
`