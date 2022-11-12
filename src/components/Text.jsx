import React from 'react';
import styled from 'styled-components';

export const Text = () => {
    const array = 'iSEARCH'.split('')
  return (
    <Wrapper>
        {array.map((item, index) =>(
            <span key={index}>{item}</span>
        ))}
    </Wrapper>
  )
}


const Wrapper = styled.span`
display: inline-block;
margin-right: 5rem;
span {
    opacity: 1;
    font-size: 3rem;
    line-height: 1.5rem;
    font-weight: 700;
}
span:nth-child(1) {
    color: blue;
}
span:nth-child(2) {
    color: red;
}
span:nth-child(3) {
    color: yellow;
}
span:nth-child(4) {
    color: blue;
}
span:nth-child(5) {
    color: green;
}
span:nth-child(6) {
    color: yellow;
}
span:nth-child(7) {
    color: red;
}
`