import React from "react";
import styled from "styled-components"

const StyledButton = styled.button`
    padding: 8px 16px;  
    font-size: 16px;
    border-width: 1px;
    border-radius: 8px;
    cursor: pointer;
`

function Button(props){
    const {title,onClick} = props;
    return <StyledButton onClick={onClick}>{title || "button"}</StyledButton>;
}

// props로 onclick의 내용을 받게 작엄
// 상위컴포넌트에서 전달하는 이벤트에 따라 버튼의 역할이 바뀌게 하였다

export default Button;