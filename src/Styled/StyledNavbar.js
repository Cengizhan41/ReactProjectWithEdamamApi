import styled from "styled-components";


export const StyledNavbar=styled.nav`

padding: .5rem 0;
background-color: ${(props)=>props.theme.colors.bg2};
color: ${(props)=>props.theme.colors.text2};
border-bottom: 2px solid ${(props)=>props.theme.colors.text2};


.navbar-brand{
    font-size: 1.8rem;
    font-weight: bold;
    img{
        background-color: ${(props)=>props.theme.colors.text1};
        border-radius: 50%;
        padding: 0.5rem;
    }
    color: ${(props)=>props.theme.colors.text1};
}

.navbar-nav{
    .nav-link{
        text-align: center;
        width: 6rem;
        font-size: 1.3rem;
        color: ${(props)=>props.theme.colors.text1};
        border-bottom: 2px solid transparent;
        transition: border-bottom .3s ease;

        &.active{
            border-bottom: 2px solid ${(props)=>props.theme.colors.text1};
            
        }
        
    }

}

@media (max-width:992px){
    .navbar-nav{
        .nav-link{
            text-align: left;
        }
    }
}

@media (max-width:576px){
    .navbar-brand{
        font-size: 1.5rem !important;
        img{
            height: 3.5rem ;
            width: 3.5rem;
        }
       
    }

    .navbar-nav{
        .nav-link{
            font-size: 1rem;
        }
    }
}
`