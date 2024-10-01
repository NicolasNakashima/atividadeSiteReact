import styled, { css } from "styled-components";


export const Wrapper = styled.div(
    () => css`
    display: flex;
    flex-direction: column;
    height: 9rem;
    width: 100%;
    box-shadow:  5px 5px 10px #c7c7c7,
             -5px -5px 10px #f9f9f9;
    
    `
    
)

export const topBarInfo = styled.div(
    () => css`
    display: flex;
    width: 100%;
    height: 2rem;
    justify-content: center;
    background-color: black;   
    padding : 1rem ;

    p {
        color: white;
    }

    &:link{
        color: white;
    }

    &:visited{
        color: white;
    }

    &:hover{
        color: white;
    }

    &:active{
        color: white;
    }

    a {
        color: white;
    }
    `
)

export const InputDiv = styled.div(
    () => css`
    display: flex;
    
    `
)


export const PDiv = styled.div(
    () => css`
    display: flex;
    
    `
)

export const UnderDiv = styled.div(
    () => css`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 0.4rem;



    p {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: larger;
    }

    `
)

export const TextComponentDiv = styled('div')(
    () => css`
    display: flex;
    align-items: center;
    gap: 1rem;
    
    
    `
)


export const HeartAndCartDiv = styled.div(
    () => css`
    display: flex;
    gap: 1rem;
    align-items: center;
    
    
    `
)


export const NavigationDiv = styled.div(
    () => css`
    display: flex;
    gap: 1rem;
    align-items: center;
    :hover{
        cursor: pointer;
        outline: auto;
    }   

    span {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    
    
    `
)

