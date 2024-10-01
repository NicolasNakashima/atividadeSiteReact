/* eslint-disable @typescript-eslint/no-unused-vars */
import * as S from './styles'

interface IProduct {
    name: string
    price: number
    rating: 1 | 2 | 3 | 4 | 5
    isFavorite: boolean
    percentageDiscount?: number
    discount?: number
    urlPhoto: string
    numberOfRatings: number
}

interface ICategoriesProps {
    categoryTitle: string
    title: string
    dateTimer?: Date
    product?: IProduct
}


export const Categories = ({categoryTitle, title, dateTimer, product}: ICategoriesProps ) => {

    return(
        <S.Wrapper>

            <S.NameAndRec>
            <S.Rectangle/>
            <S.CategoryName>{categoryTitle}</S.CategoryName>
            </S.NameAndRec>
            <S.Title>{title}</S.Title>




            

        </S.Wrapper>
    )






}