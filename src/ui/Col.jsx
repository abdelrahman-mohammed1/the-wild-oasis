import styled, { css } from "styled-components";
const bgstyle = {
    light: css`
        background-color: burlywood; 
        color: orangered  ; 
    ` ,
    dark: css` 
    background-color: black; 
    color: lightblue;
    `
}
const textStyle = {
    large: css`
        font-size:25px  ;
        font-weight: bold; 

    ` ,
    medium: css`
        font-size: 20px; 
        font-weight: 600;
     `,
    small: css`
        font-size: 18px; 
        font-weight: 500;
    `
}

const Col = styled.div`
   
    height: 180px; 
    width: 200px; 
    margin-top: 20px; 
    ${props => bgstyle[props.bgstyle]} 
    ${props => textStyle[props.textStyle]} 
    ${props => props.center && css`
    display: flex;
    justify-content: center; 
    align-items: center;
    `}
`
Col.defaultProps = {
    center: true
}


export default Col