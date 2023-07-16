import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        id:1,
        message:'안녕하세요'
    },
    {
        id:2,
        message:'점심식사 하세용'
    },
    {
        id:3,
        message:'회의시작~'
    }
]

var timer;

class NotificationList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            notifications:[],
        };
        // notifications 라는 빈 배열을 state에 넣어서 초기화했다
    }

    // 클래스 컴포넌트의 생명주기 중 하나인 componentDidMount 함수에서는 자바스크립트의 셋인터벌을 사용하여 1초마다 정해진 작업을 수행하고있다.
    componentDidMount(){
        const {notifications} = this.state;
        timer = setInterval(()=>{
            // 미리 만들어둔 reservedNotifications로부터 알림 데이터를 하나씩 가져와서 
            // state에 있는 Notifications배열에 가져와서 업데이트하는것
            if(notifications.length < reservedNotifications.length){
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                // state의 업데이트를 위해 setState함수를 사용한다.
                // setState 는 클래스 컴포넌트에서 state를 업데이트 하기위해서 반드시 사용하는 함수이다
                this.setState({
                    notifications: notifications,
                });
            } else {
                // componentWillUnmount() 실험을 위해 notifications의 위와 같은 동작이 끝나면 빈배열로 만들었다.
                this.setState({
                    notifications: [],
                });
                clearInterval(timer);
            }
        }, 1000);
    }

    render(){
        return(
            <div>
                {this.state.notifications.map((notification)=>{
                    return <Notification 
                    key={notification.id}
                    id={notification.id}
                    message={notification.message} 
                    />;
                })}
            </div>
        )
    }
}

export default NotificationList;
