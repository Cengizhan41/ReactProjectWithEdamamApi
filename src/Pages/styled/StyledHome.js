import styled from "styled-components";


export const StyledHome=styled.div`
width: 90%;
.heroRow{
    color:  ${(props)=>props.theme.colors.text1};
    background-color: ${(props)=>props.theme.colors.bg2};
    .imgContainer{
    height: 25rem;
    display: block;
    text-align: center;
    position: relative;
    img{
    height:100%;
    width: 100%;
    object-fit: cover;
}

}
}

.homeFormContainer{
    color:  ${(props)=>props.theme.colors.text1};
    background-color: ${(props)=>props.theme.colors.bg2};


}

@media (max-width:992px){
    .infos{
        padding: 1rem;
    }
}

@media (max-width:768px){
    width: 97%;   

}

@media (max-width:576px){
    .heroRow{
    .imgContainer{
    height: 20rem;}
    } 
    .infos{
        h1{
            font-size: 1.5rem;
        }
        p{
            font-size: 1rem;
        }
    }
    .homeFormContainer{
        .homeFormTitle{
            font-size: 1.5rem;
        }
        .border-start{
            display: none !important;
            border-left: none !important;
            h3{
                font-size: 1rem;
            }
        }
    }
}


`