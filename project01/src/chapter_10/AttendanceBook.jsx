import React from "react"

const students = [
    {id:1,name:"inje"},
    {id:2,name:"asdf"},
    {id:3,name:'qwer'},
    {id:4,name:'zxcv'}
];

function AttendanceBook(props){
    return(
        <ul>
            {students.map((students)=>{
                // return <li key={students.id}>{students.name}</li>
                // 키값을 안넣어주면 콘솔에 오류가 난다

                return <li key={`student-id-${students.id}`}>{students.name}</li>
                 // 키를 포맷팅 된 문자열로 변경 (맥북 프로에어에서 `는 옵션+₩)
            })}

            {students.map((students, index)=>{
                return <li key={`student-id-${students.id}`}>{students.name}</li>
                 // key를 index로 변경 할수도있다.
            })}
        </ul>
    )
}

export default AttendanceBook;