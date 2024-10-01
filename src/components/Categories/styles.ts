import styled, { css } from "styled-components";



export const Wrapper = styled.div(
    () => css`
    display: flex;
    flex-direction: column;

    
    
    
    `
)

export const Title = styled.p(
    () => css`
    font-size: 28px;
    font-weight: 600;
    
    
    `
)


export const NameAndRec = styled.div(
    () => css`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    
    
    `
)

export const Rectangle = styled.div(
    () => css`
    display: flex;
    background-color: #DB4444;
    height: 2.5rem;
    width: 1.25rem;
    border-radius: 0.2rem;
    align-items: center;

    `

    
)

export const CategoryName = styled.p(
    () => css`
    color: #DB4444;
        font-size: 16px;
        weight: 600;
    
    
    `
)