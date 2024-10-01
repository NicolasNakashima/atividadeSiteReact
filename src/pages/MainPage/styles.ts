import styled, { css } from "styled-components";


export const Wrapper = styled.div(
    () => css`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    
    
    `
)

export const WrapperImg = styled.div(
    () => css`
    display: flex;
    box-shadow: 1px 1px -1px -1px;
    align-items: center;
    justify-content: center;

    
    `
)

export const CategoriesDiv = styled.div(
    () => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 2rem;
    
    
    `
)