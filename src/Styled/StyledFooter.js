import styled from "styled-components";


export const StyledFooter=styled.footer`
color: ${(props)=>props.theme.colors.text1};

a{
    text-decoration: none;
    color: ${(props)=>props.theme.colors.text1};
    
}

.text-muted{
    color: ${(props)=>props.theme.colors.text1} !important;
}

@media (max-width:576px){
    border-top: none !important;

    .footerInfo{
        border-top: 1px solid ${(props)=>props.theme.colors.text1};
        border-bottom: 1px solid ${(props)=>props.theme.colors.text1};
        padding: 1rem 0px;
        
    }
}
`