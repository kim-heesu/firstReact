import React from "react";

// function Comment(props){
//     return(
//         <div>
//             <h1>제가 만든 첫 컴포넌트입니당.</h1>
//         </div>
//     )
// }

export default Comment;

const styles = {
    wrapper:{
        margin: 8,
        padding: 8,
        display: 'flex',
        flexDirection:"row",
        border: '1px solid gray',
        borderRadius:16,
    },
    imageContainer:{},
    image:{
        width: 50,
        height: 50,
        borderRadius:25
    },
    contentContainer:{
        marginLeft:8,
        display:"flex",
        flexDirection:"column",
        justifyContent:'center',
    },
    nameText:{
        color:"#000",
        fontSize:16,
        fontWeight:'bold',
    },
    commnetText:{
        color:"#000",
        fontSize:16,
    }
};

function Comment(props){
 return(
    <div style={styles.wrapper}>
        <div style={styles.imageContainer}>
            <img src="http://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" style={styles.image} />
        </div>

        <div style={styles.contentContainer}>
            <span style={styles.nameText}>{props.name}</span>
            <span style={styles.commnetText}>{props.comment}</span>
        </div>
    </div>
 )
}