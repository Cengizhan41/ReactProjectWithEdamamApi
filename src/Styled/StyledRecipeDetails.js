import styled from "styled-components";


export const  StyledRecipeDetails = styled.div`

.cardContainer{
    .card{ 
        background-color: ${(props)=>props.theme.colors.bg2};
        color: ${(props)=>props.theme.colors.text1};
        .col-lg-4{
            .img-wrap{
            width: 100%;
            height: 100%;
            img{
                width: 90%;
                object-fit: contain;
                border: 3px solid ${(props)=>props.theme.colors.bg1};            
            }
        }
        }
        .card-body{
            height: 100%;
            .titles{
                background-color: ${(props)=>props.theme.colors.bg1};
                color: ${(props)=>props.theme.colors.text2};
                .card-title{
                font-weight: bold;
                }
                .badge{
                    /* font-size: .8rem; */
                }
            }
            .healthLabels{
               background-color:${(props)=>props.theme.colors.bg1};
                overflow-x: auto;
                white-space: nowrap;
                cursor: pointer;
                .healthLabelItem{
                display: inline-block;
                    
                }
                &::-webkit-scrollbar { 
                display: none;  /* Safari and Chrome */
                }
               
            }
            .ingredients{
                h4{
                width: 30%;
                background-color: ${(props)=>props.theme.colors.text2};
                color: ${(props)=>props.theme.colors.bg1};
                border: 2px solid ${(props)=>props.theme.colors.bg1};
                
                }
                .col{
                .ingLink{
                overflow: hidden;
                border: .5px solid ${(props)=>props.theme.colors.text2};
                background-color: ${(props)=>props.theme.colors.bg1};
                color: ${(props)=>props.theme.colors.text2};
                text-decoration: none;
                width: 100%;
                height: 4rem;
                transition: transform 0.2s ease-in-out;

                &:hover{
                    transform: scale(1.05);
                }
                    }
                    
                }
               
            }
           
        }
    }  
}
.nutrientsContainer{
    .nutrientsTitle{
        background-color: ${(props)=>props.theme.colors.text1};
        color: ${(props)=>props.theme.colors.bg2};
    }
    .dailyValues{
        color: ${(props)=>props.theme.colors.bg2};
        background-color: ${(props)=>props.theme.colors.text1};
    }
    .totalValues{
        background-color: ${(props)=>props.theme.colors.text1};
        color: ${(props)=>props.theme.colors.bg2};
    }
}


@media (max-width:1200px){
    .cardContainer{
        .card{
            .card-body{
                .titles{
                    > * {
                        margin-top: .7rem;
                    }
                    
                    .card-title{
                        font-size: 1.5rem;
                    }
                }
                .ingredients{
                    h4{
                    width: 70% !important;
                    }
                    .col{
                    .ingLink{
                    height: 2.5rem !important;
                    font-size: .8rem !important;
                        }
                        
                    }
                } 
            }
        }
    }
}
@media (max-width:992px){
    .cardContainer{
        .card{
            .col-lg-4{
             .img-wrap{
                margin: 0px auto;
                width: 70% !important;
                padding-top: 1rem !important;
                img{

                }
             }
            }

        }
    }
}
@media (max-width:768px){
    .cardContainer{
        .card{
            .col-lg-4{
             .img-wrap{
                 width: 100% !important;
                img{
                }
             }
            }
            .card-body{
                .titles{
                    > * {
                        margin-top: .4rem;
                    }
                    
                    .card-title{
                        font-size: 1rem;
                        text-align: center;
                        margin-bottom: .7rem !important;
                    }
                }
                .ingredients{
                    h4{
                    width: 100% !important;
                    }
                }
            }
        } 
    }
    .nutrientsContainer{
        .nutrientsTitle{
            font-weight: 500;
            margin-bottom: 0px;
        }
        .dailyValues{
            h3{
                font-size: 1.2rem;
            }
            .col-lg-3{
                padding: 0px;
                margin: .5rem 0;
                h5{
                    font-size: 1rem;
                    margin-bottom: 0px;
                }

            }
        }
        .totalValues{
            h3{
                font-size: 1.2rem;
            }
        }
    }
}
`