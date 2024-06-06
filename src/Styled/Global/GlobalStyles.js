import { createGlobalStyle } from "styled-components";


export const GlobalStyles=createGlobalStyle`
body{
    margin: 0px;
    padding: 0px;
    font-family: "Lato", sans-serif !important;
    overflow-x: hidden;
    background-color: ${(props)=>props.theme.colors.bg1};

 
} 
button,.btn{
        background-color: ${(props)=>props.theme.colors.btnBg} !important;
        color:${(props)=>props.theme.colors.btnText} !important;
        border: 2px solid ${(props)=>props.theme.colors.text1};
        &:hover{
            color: ${(props)=>props.theme.colors.btnBg} !important;
            background-color: ${(props)=>props.theme.colors.btnText} !important;
        }
    }

.spinner-grow{
    color:${(props)=>props.theme.colors.text1} !important;
}
`