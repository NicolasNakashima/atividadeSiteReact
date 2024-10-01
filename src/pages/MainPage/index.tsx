import { Navbar } from '../../components/Navbar'
import * as S from './styles'
import Frame741 from '../../assets/Frame 741.png'
import { Categories } from '../../components/Categories'
export const MainPage = () => {
    return (
        <S.Wrapper>
            <Navbar/>
            
            <S.WrapperImg>
            <img src={Frame741} alt="Imagem de um iphone 14 pro" />
            </S.WrapperImg>
            <S.CategoriesDiv>
            <Categories title="Flash Sales" categoryTitle="Today's"/>
            </S.CategoriesDiv>

            

            
        
        </S.Wrapper>
    )
}