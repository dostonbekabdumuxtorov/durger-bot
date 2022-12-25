import { Button } from "@mui/material";
import styled from "styled-components";
import {MAINBACKGROUND} from '../../constants/colors'

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
    justify-content: space-around;
    align-items: center;
    /* gap: 10px; */
    flex-wrap: wrap;
`

export const Box = styled.div`
    width: 110px;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
`

export const Image = styled.img`
    width: 80px;
    height: 80px;
    object-fit: cover;
`

export const Row = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap:6px;
`

export const Name = styled.h1`
    font-size: 14px;
    font-weight: 600px;
    color: white;
`

export const Price = styled.li`
    font-size: 14px;
    font-weight: 600px;
    color: white;
`

export const Add = styled(Button)`
    width: 90%;
    height: 28px;
    margin-top: 10px !important;
    color: white !important;
    font-family: 'Lexend' !important;
    background-color: #F8A917 !important;
`

export const Row1 = styled.div`
    display: flex;
    width:100%;
    justify-content: space-around;
    align-items: center;
`


export const MinusBtn = styled.button`
    width: 40px !important;
    height: 28px;
    border:none;
    font-size:20px;
    border-radius:5px;
    color: white !important;
    transition: .3s;
    font-family: 'Lexend' !important;
    background-color: red !important;
    &:hover{
        cursor:pointer;
    }
    &:active{
        background-color:#EB4C42 !important;

    }
`

export const PlusBtn = styled.button`
    width: 40px !important;
    height: 28px;
    border:none;
    transition: .3s;
    font-size:20px;
    border-radius:5px;
    color: white !important;
    font-family: 'Lexend' !important;
    background-color: #F8A917 !important;
    &:hover{
        cursor:pointer;
    }
    &:active{
        background-color:#A1E160 !important;
    }
`

export const Badge = styled.div`
    width: auto;
    min-width: 30px;
    height: 30px;
    padding: 3px;
    border-radius: 100%;
    background-color: #F8A917 ;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 3;
    right: 10px;
    top:5px;
    box-shadow: 0px 0px 4px black;
`