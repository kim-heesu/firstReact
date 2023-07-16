import React from "react";

const styles = {
    wrapper:{
        padding: 16,
        display:"flex",
        flexDirection:"row",
        borderBottom:"1px solid Gray",
    },
    greeting:{
        marginRight: 8,
    }
};

function Toolbar(props){
   const {isLoggedIn, onClickLogin, onClickLogout} = props;

   const count =0;
   
   return(
    <div style={styles.wrapper}>
         <div>{count && <h1>카운트:{count}</h1>}</div><br />

        {isLoggedIn && <span style={styles.greeting}>환영합니다</span>}

        {isLoggedIn ? (
            <button onClick={onClickLogout}>로그아웃</button>
        ) : (
            <button onClick={onClickLogin}>로그인</button>
        )}
    </div>
   )
}

export default Toolbar;