import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import * as S from "./styles"



export const Navbar = () => {

    return (
        <S.Wrapper>
            <S.topBarInfo>
                <S.PDiv><p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! 
                <a href=""> ShopNow</a></p></S.PDiv>
                
                <S.InputDiv>
                    <FormControl variant="standard">
                        <InputLabel id="demo-simple-select-label">Language</InputLabel>
                            <Select>
                                <MenuItem value={10}>Portuguese</MenuItem>
                                <MenuItem value={20}>English</MenuItem>
                                <MenuItem value={30}>Spanish</MenuItem>
                            </Select>
                    </FormControl>  
                </S.InputDiv>
                
            </S.topBarInfo>
            <S.UnderDiv>
                <p>Exclusive</p>


                <S.NavigationDiv>
                <span>Home</span>
                <span>Contact</span>
                <span>About</span>
                <span>Sign up</span>



                </S.NavigationDiv>
                

                
                <S.TextComponentDiv>
                    <TextField id="outlined-basic" label={<SearchOutlinedIcon/>} variant="outlined" size="small"/>
                <FavoriteBorderOutlinedIcon/>
                <ShoppingCartOutlinedIcon/>
                </S.TextComponentDiv>
                
            </S.UnderDiv>
            
            
            
        </S.Wrapper>
    )
    
}