import styled from "styled-components";


export const StyledWDYE=styled.div`

.card{
    border: 2px solid ${(props)=>props.theme.colors.text1};
    background-color: ${(props)=>props.theme.colors.bg1};
    color: ${(props)=>props.theme.colors.text1};
    .img-wrap{
        height: 250px;

        img{
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }

    .card-body{
        height: 100%;
        position: relative;
        .moreDetails{
            position: absolute;
            bottom: 1rem;
            right: 1rem;
          
        }
    }
}


@media (max-width:992px){
    .card{
        .card-body{
            height: 220px;
        }
    }
}

@media (max-width:768px){
    padding: 0;
    .card{
        .card-body{
            height: 250px;
        }
    .card-title{
        text-align: center;
    }
    .img-wrap{
        height: 230px;

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
        font-size: 1.1rem;
        margin-top: .35rem;

        button{
            font-size: 1rem !important;
        }
    }
    .card{
        .card-body{
            height: 250px;

           
        }
    }

}

`