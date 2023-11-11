/* 

    JSON은 JS 문법으로 구조화된 데이터교환 방식

    key value로 구성 되며 재귀젹으로 key value 가능 ex1 참조

    여러개의 JSON을 배열 형태로 담을 수 있다 -> JSONArray ex2 참조

    다른 언어, 플래폼으로부터 독립적으로 별도의 버전으로 관리됨
    -> JS에선 JSONObject로 바꿔서 사용, Python이면 Dic으로 변경하여 사용
    직렬화와 역직렬화를 통해 서로 다른 언어 / 서비스간에 데어터 교환을 함
    직렬화 -> JSON.stringify  => JSONObject를 JSON으로 만듦
    역직렬화-> JSON.parse()   =>  JSON을 받아서 JSONObject로 만들어서 사용
*/

// ex1)
const JungkeeKim = {
    name: {
        firstName: "Kee",
        lastName: "Kim"
    },
    age: 30
}

// ex2)
const people = [
    {
        name: KeeKim,
        age: 30,
    },
    {
        name:"Eric",
        age: 20
    }
]

