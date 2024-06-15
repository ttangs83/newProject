for(let x = 0; x < 10 ; x++){
    console.log("하나씩",x);
}

for(let x = 0; x < 10 ; x+=2){
    console.log("두개씩",x);
}

const countlist = ['a','b','c'];

for(x in countlist){
    console.log(`${x}번째의 값은 ${countlist[x]}입니다.`);
}

const countobj = {
    "이름" : "돌돌이",
    "나이" : 7
}

for(x in countobj){
    console.log(`${x}은/는 ${countobj[x]}`);
}