import React from "react";

class ConfirmButton extends React.Component{
    constructor(props){
        super(props);

        this.state={
            isConfirmed: false,
        }; // 확인여부를 저장하기 위한 스테이트
       
        // this.handleConfirm = this.handleConfirm.bind(this);
        // 바인드를 사용하는 방식으로 이벤트 핸들러를 처리했다.
    
    }

   
    // handleConfirm(){
    //     this.setState((prevState)=>({
    //         isConfirmed: !prevState.isConfirmed,
    //     }));
    //     // 온클릭 이벤트를 처리하기 위해 handleConfirm이벤트를 만들어 사용했다.
    // }


    handleConfirm=()=>{
        this.setState((prevState)=>({
            isConfirmed: !prevState.isConfirmed,
        }));
    }
    // class fields syntax 사용하기

    render() {
        return(
            <button onClick={this.handleConfirm} disabled={this.state.isConfirmed}>{this.state.isConfirmed ? "확인됨" : "확인하기"}</button>
            // 버튼을 클릭시 클릭이벤트가 이벤트핸들러로 전달되고, isConfirmed의 값이 true로 바뀌면서 버튼이 비활성화 된다.
        );
    }

}

export default ConfirmButton;

// confirmButton을 클래스컴포넌트로 구현