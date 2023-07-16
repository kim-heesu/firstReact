import React, {useState} from "react";

function ConfirmButton(props){
    const [isConfirmed, seIsConfiremd] = useState(false);

    const handleConfirm = () =>{
        seIsConfiremd((prevIsConfirmed)=>!prevIsConfirmed);
    };

    return(
        <button onClick={handleConfirm} disabled={isConfirmed}>
            {isConfirmed ? "확인됨" : "확인하기"}
        </button>
    )
}

export default ConfirmButton;

// confirmButton을 함수컴포넌트로 작성