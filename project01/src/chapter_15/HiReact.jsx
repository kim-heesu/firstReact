import React from "react";
import styled from 'styled-components';

// 스타일컴포넌트 사용예시
const Wrapper = styled.div`
    padding: 1em;
    background: pink
`

function MainPage(props){
    return(
        <Wrapper>
          안녕리액트
        </Wrapper>
    )
}

export default MainPage