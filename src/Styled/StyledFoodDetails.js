import styled from "styled-components";


export const StyledFoodDetails=styled.div`
color: ${(props)=>props.theme.colors.text1};
background-color: ${(props)=>props.theme.colors.bg2};
width: 80%;
border: 2px solid ${(props)=>props.theme.colors.text1};
.card{
color: ${(props)=>props.theme.colors.text1};
background-color: ${(props)=>props.theme.colors.bg2};
border: none;
.detailTitle{
    /* border-bottom: 1px solid ${(props)=>props.theme.colors.text1}; */
    strong{
        color: ${(props)=>props.theme.colors.bg1};
        background-color: ${(props)=>props.theme.colors.text1};
    }
}
.card-body {
  height: 300px;
  .canvas-container {
  width: 100%;
  height: 100%;
   
}
}
.img-wrap{
    height: 300px;
    text-align: center;
    img{
        width: 80%;
        object-fit: cover;
        height: 100%;
    }
}
}


@media (max-width:768px){
width: 100%;
.card{
    padding: .5rem !important;
    .detailTitle{
        margin: 0.7rem 0px !important;
    }
    .img-wrap{
    img{
        width: 100%;
    }
}
}
}




`