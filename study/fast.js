/*'use strict'

const obj = {
    title : "node"
}

const isEmptyObject = () => obj.title ? true : false;

isEmptyObject();*/


// npm 은 다운
// npx 는 일회성
// npx cowsqy "hello"
// sl

function edit() {};
function write () {};

module.exports = {
    edit,
    write
};


// every ?
// 배열의 모든 인자가 지정된 조건에 부합하는지 t 또는 f로 결과값 반환
'use strict'

const arr = [2, 3, 4];

const isBiggerThanOne = arr.every(key => key > 1);
console.log(isBiggerThanOne);

// find ? 
// 키 값이 있으면 그 값을 반환
//include ?
// 특정 요소가 배열 안에 있을 시 t 또는 f 로 결과값 반환
const arr1 = ['하이', '헬로'];
const res = arr1.find(key => key === '하이');
const ret = arr1.includes('헬로');
console.log(res);
console.log(ret);

// foreach ?
const arr2 = [2, 3, 4];
const newArr = [];

arr2.forEach(item => {
    newArr.push(item);
});

console.log(arr2);
console.log(newArr);

//Map ?
// 배열의 각 요소에 대해 정의된 콜백 함수를 호출하고 결과를 포함하는 배열을 반환
const a = [1, 7, 9];
const b = a.map(x => x+1);
console.log(b);

//Filter
// 특정 조건에 맞는 요소들만 모아 새로운 배열 생성 후 반환
const a1 = [0,7, -1, 8];
const f = a1.filter(x => x>1);
console.log(f);

// Object.assign() ?
//spread ?
const obj = {
    title : '오브젝트'
};

const newObj = {
    name : '합ㅊㅕ보기'
};

const ar = [10, 9 ,8];
const newAr = [7, 6, 5];

// assign 의 사용
const ret1 = Object.assign({}, obj, newObj);
console.log(ret1);
// spread 의 사용
const ret2 = {
    ...obj,
    ...newObj
};
const ret3 = [ // '[]' 임에 주의!
    ...ar,
    ...newAr
];
console.log(ret2);
console.log(ret3);
