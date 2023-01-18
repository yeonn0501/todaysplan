
// 등록 버튼 이벤트
// 입력 폼 유효성 검사
// 1. 기간 선택시 첫번째 기간 < 두번째 기간
// 2. 등록시 객체에 id값 생성 후 저장 (0부터 시작)

const category = document.getElementById("Category");
const title = document.getElementById("Title");
const desc = document.getElementById("Desc");
const startTime = document.getElementById("startTime");
const endTime = document.getElementById("endTime");
const insertBtn = document.getElementById("insertBtn");
const validate = false;
const item = document.querySelector(".todo-item");
let todos = [];
let start;
let end;
let time;
let replaceTime;
let hours;
let minutes;

title.focus();

// 시간 입력시 유효성 검사 및 세미콜론 추가
function onFocusOut() {
  time = this.value;
  replaceTime = time.replace(/\:/g, "");
  
  if (replaceTime.length == 2 && replaceTime < 25){
    this.value = replaceTime + ":00";
  } else if (replaceTime.length == 2 && replaceTime > 24) {
    alert("시간은 24시를 넘길 수 없습니다.");
    this.focus();
    this.value = "";
    return false;
  }
  else if(replaceTime.length == 5 ) {
    replaceTime = replaceTime.substring(0, 4);
    this.value = replaceTime;
  }
  else if (replaceTime.length >= 4 ) {
    hours = replaceTime.substring(0,2);
    minutes = replaceTime.substring(2,4);
    if(hours + minutes > 2400) {
      console.log("요기")
      alert("시간은 24시를 넘길 수 없습니다.");
      this.value = "";
      this.focus();
      return false;
    }
    else if (minutes > 60) {
      console.log("여기")
      console.log(minutes, hours)
      this.focus();
      this.value = hours + ":";
      return false;
    } else {
      console.log("마지막")
      time = hours + ":" + minutes;
      this.value = time;
    }
  }
  
}

// 유효성 검사
function ValidateTodo() {
  let blank_pattern = /^\s+|\s+$/g;
  if (title.value.replace(blank_pattern, '') == '') {
    title.focus();
  } else {
    validate = true;
  }
}

// 할 일 등록시 유효성 검사, 입력란 비우고 화면에 그린뒤 저장
function handleTodoSubmit() {
  ValidateTodo();
  if (validate) {
    console.log(validate);
    console.log(title.value)
  }
}


// 한번 클릭시 수정


// 두번 클릭시 완료 처리
// 다시 두번 클릭시 되돌리기
function onDoubleClick() {
  console.log('test')
}


// 길게 클릭시 휴지통 아이콘 생성

// 휴지통 아이콘으로 이동시 삭제


insertBtn.addEventListener("click", handleTodoSubmit);
item.addEventListener("dblclick", onDoubleClick);
startTime.addEventListener("focusout", onFocusOut);
endTime.addEventListener("focusout", onFocusOut);