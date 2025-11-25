// back to top
const bttBtn = document.querySelector('#btt');

//윈도우에 스크롤이 생기면 300이상이면 버튼 나타나고, 이하면 사라진다. 버튼을 클릭하면 화면 상단으로 부드럽게 이동한다.

//윈도우에 스크롤이 생기면
window.addEventListener('scroll', () => {
  //scr에 윈도우 scrollY 값을 저장
  let scr = window.scrollY;
  //scrollY의 값이 300 이하면
  if (scr >= 300) {
    //버튼 노출
    bttBtn.classList.add('active');
  } else {
    //버튼 제거
    bttBtn.classList.remove('active');
  }
});

//btt 버튼 클릭하면
bttBtn.addEventListener('click', (e) => {
  //기본 a 링크 제거
  e.preventDefault();
  //window 0,0 값으로 이동
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: 'smooth'
  });
});


//horizontal 활용
const slideWrapper = document.querySelector('.testimonial');
const slideContainer = document.querySelector('.testimonial ul');
const slides = document.querySelectorAll('.testimonial li');

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
 
let currentIdx = 0;
function moveSlide(idx) {
  //전체 컨테이너에서 slides의 넓이 100% 만큼 이동
  slideContainer.style.left = -idx * 100 + '%';
  currentIdx = idx;
}

nextBtn.addEventListener('click', () => {
  let nextIdx = (currentIdx + 1) % slides.length;
  moveSlide(nextIdx);
});

prevBtn.addEventListener('click', () => {
  let prevIdx = (currentIdx - 1 + slides.length) % slides.length;
  moveSlide(prevIdx);
});



// accordion
const quest = document.querySelectorAll('.question');
const answer = document.querySelectorAll('.answer');

//question 클릭하면 question 클래스에 active 추가

for(let q of quest) {
  // quest 클릭 이벤트
  q.addEventListener('click', ()=>{
    // quest에 active가 있으면 제거
    for (let qd of quest){
      qd.classList.remove('active');
      //선택한 quest에 active가 없는 바로 다음 답변
      let answerHide = qd.nextElementSibling;
      //없는 바로다음 답변은 숨기기
      if (answerHide) {
        answerHide.classList.remove('active')
      }
    }
    // quest에 active 추가
    q.classList.add('active');
    // active가 추가된 답변
    let crtAnswer = q.nextElementSibling;
    //active가 추가됐으면 답변에도 active추가
    if(crtAnswer) {
      crtAnswer.classList.add('active')
    }
  });
}


