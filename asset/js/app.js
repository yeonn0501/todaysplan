
// 등록 버튼 이벤트
// 입력 폼 유효성 검사
// 1. 기간 선택시 첫번째 기간 < 두번째 기간
// 2. 등록시 객체에 id값 생성 후 저장 (0부터 시작)

let category = document.getElementById("Category");
let title = document.getElementById("Title");
let desc = document.getElementById("Desc");
let startDate = document.getElementById("startDate");
let startTime = document.getElementById("startTime");
let endDate = document.getElementById("endDate");
let endTime = document.getElementById("endTime");
let insertBtn = document.getElementById("insertBtn");
let validate = false;


function InsertTodo() {
  ValidateTodo();
  if (validate) {
    console.log(validate);
    console.log(title.value)
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

// 한번 클릭시 수정

// 두번 클릭시 완료 처리

// 길게 클릭시 휴지통 아이콘 생성

// 휴지통 아이콘으로 이동시 삭제


insertBtn.addEventListener("click", InsertTodo);
