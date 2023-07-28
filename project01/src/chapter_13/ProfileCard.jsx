import Card from './Card'
import React, {Fragment} from 'react'

function ProfileCard(props){
    return(
        <Fragment>
            <Card title="hee su" backgroundColor="green">
                <p>안녕하세용 히수입니다.</p>
                <p>리액트를 공부중입니다.</p>
            </Card>
            <Card title="안녕" backgroundColor="blue">
                <p>호호</p>
            </Card>
        </Fragment>


    )
}

export default ProfileCard

// 리액트에서틑 virtual DOM 에서 컴포넌트 변화를 감지 하기 위해 컴포넌트 내부는 DOM 트리구조 하나로 되어야 한다는 규칙이 있어서
// return 아래에 같은 레벨의 태그들이 있으면 에러가 뜬다.
// 그냥 div로 감싸줄 수도 있지만 위와 같이 Fragment를 임포트 한 후 사용하면 불필요한 div사용을 줄일 수 있다! 