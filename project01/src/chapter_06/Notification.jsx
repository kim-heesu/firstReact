import React from "react";

const styles={
    wrapper:{
        margin: 8,
        padding: 8,
        display:"flex",
        flexDirection:'row',
        border:'1px solid gray',
        borderRadius:16,
    },
    messageText:{
        color:"#000",
        fontSize:16,
    },
};

class Notification extends React.Component {
    constructor(props){
        super(props);

        this.state={};
    }

    componentDidMount(){
        console.log(`${this.props.id} componentDidMount() called.`)
    }

    componentDidUpdate(){
        console.log(`${this.props.id} componentDidUpdate() called.`)
    }9
    

    componentWillUnmount(){
        console.log(`${this.props.id} componentWillUnmount() called.`)
    }

    // 콘손을 확인해보면 NotificationList.jsx에서 setInterval 함수를 사용한대로 reservedNotifications 배열의 1,2,3번 순서대로 componentDidMount > componentDidUpdate 되면서 차례대로 message가 추가되며 이후 setInterval함수의 내용이 끝날때 빈배열로 바꾸면서 componentWillUnmount이 실행되는걸 볼 수 있다.
    render() {
        return(
            <div style={styles.wrapper}>
                <span style={styles.messageText}>{this.props.message}</span>
            </div>
        )
    }
}

export default Notification;