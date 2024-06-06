import styled from "styled-components";


export const StyledCategoryComp=styled.div`
color: ${(props)=>props.theme.colors.text1};
.rowTitle{
    background-color:${(props)=>props.theme.colors.bg2} ;
}
.categoryCard{
    border: 2px solid ${(props)=>props.theme.colors.text1};
    background-color: ${(props)=>props.theme.colors.bg2};
    color: ${(props)=>props.theme.colors.text1};
    .card-body{
        height: 100%;
        position: relative;
        .moreDetails{
            position: absolute;
            bottom: .5rem;
            right: .5rem;
          
        }
    }
    .img-wrap{
        height: 210px;
        border-right: 2px solid ${(props)=>props.theme.colors.text1};
        img{
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }

   
}

@media (max-width:992px){
    .categoryCard{
    .card-body{
        height:200px;
    }
    .img-wrap{
        height: 200px;
        border-right: none;
        border-bottom: 2px solid ${(props)=>props.theme.colors.text1};
   
        img{
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }

   
    }
}

@media (max-width:576px){
    .title{
        text-align: center;
        font-size: 1.2rem;

        button{
            font-size: 1rem !important;
        }
    }
    .categoryCard{
        width: 90%;
        text-align: center;
        .img-wrap{
                height:300px;
            }
        .card-body{
            height: 250px; 
            
        .moreDetails{
            font-size: .9rem;
        
        }
        .card-title{
            margin-bottom: 1rem;
            font-size: 1.2rem;
            font-weight: bold;
        }
          
        }
       
    }

    .upFlex{
        h5{
            font-size: 1.1rem;
            padding-bottom: .5rem;
        }
    }
}

`