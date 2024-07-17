//          ROUTES FOR ALL BTNS        //

document.addEventListener('DOMContentLoaded', () => {
  const mainPage = document.querySelector('.main-page');
  const testPage = document.querySelector('.test-page');
  const resultPage = document.querySelector('.result-page');
  const startTestBtns = document.querySelectorAll('.start_test-btn');

  startTestBtns.forEach((button) => {
    button.addEventListener('click', () => {
      mainPage.classList.toggle('hidden');
      testPage.classList.toggle('active');
    });
  });
  //         ANSWER BTNS        //
  const answerBtns = document.querySelectorAll('.answer__btn');
  const answers = document.querySelectorAll('.answer');
  const answerColors = document.querySelectorAll('.answer__color');
  const answerNumbers = document.querySelectorAll('.answer__number');

  answerBtns.forEach((button) => {
    button.addEventListener('click', () => {
      button.classList.toggle('button__checked');
    });
  });

  answerColors.forEach((answer) => {
    answer.addEventListener('click', () => {
      answer.classList.toggle('answer__color-checked');
    });
  });

  answerNumbers.forEach((number) => {
    number.addEventListener('click', () => {
      number.classList.toggle('answer__number-checked');
    });
  });

  //         CONTINUE TEST BTNS        //

  const nextTest2Btn = document.querySelector('.next__test2');
  const nextTest3Btn = document.querySelector('.next__test3');
  const nextTest4Btn = document.querySelector('.next__test4');
  const nextTest5Btn = document.querySelector('.next__test5');
  const nextTest6Btn = document.querySelector('.next__test6');
  const nextTest7Btn = document.querySelector('.next__test7');
  const nextTest8Btn = document.querySelector('.next__test8');
  const nextTest9Btn = document.querySelector('.next__test9');
  const nextTest10Btn = document.querySelector('.next__test10');
  const nextTest11Btn = document.querySelector('.next__test11');
  const nextTest12Btn = document.querySelector('.next__test12');
  const test1 = document.querySelector('.test__1');
  const test2 = document.querySelector('.test__2');
  const test3 = document.querySelector('.test__3');
  const test4 = document.querySelector('.test__4');
  const test5 = document.querySelector('.test__5');
  const test6 = document.querySelector('.test__6');
  const test7 = document.querySelector('.test__7');
  const test8 = document.querySelector('.test__8');
  const test9 = document.querySelector('.test__9');
  const test10 = document.querySelector('.test__10');
  const test11 = document.querySelector('.test__11');
  const test12 = document.querySelector('.test__loading-page');

  nextTest2Btn.addEventListener('click', () => {
    test1.classList.add('hidden');
    test2.classList.add('active');
  });

  nextTest3Btn.addEventListener('click', () => {
    test2.classList.remove('active');
    test3.classList.add('active');
  });
  nextTest4Btn.addEventListener('click', () => {
    test3.classList.remove('active');
    test4.classList.add('active');
  });
  nextTest5Btn.addEventListener('click', () => {
    test4.classList.remove('active');
    test5.classList.add('active');
  });
  nextTest6Btn.addEventListener('click', () => {
    test5.classList.remove('active');
    test6.classList.add('active');
  });
  nextTest7Btn.addEventListener('click', () => {
    test6.classList.remove('active');
    test7.classList.add('active');
  });
  nextTest8Btn.addEventListener('click', () => {
    test7.classList.remove('active');
    test8.classList.add('active');
  });
  nextTest9Btn.addEventListener('click', () => {
    test8.classList.remove('active');
    test9.classList.add('active');
  });
  nextTest10Btn.addEventListener('click', () => {
    test9.classList.remove('active');
    test10.classList.add('active');
  });
  nextTest11Btn.addEventListener('click', () => {
    test10.classList.remove('active');
    test11.classList.add('active');
  });

  //        SHOW LOADER AND RESULT       //
  nextTest12Btn.addEventListener('click', () => {
    test11.classList.remove('active');
    test12.classList.add('active');
    setTimeout(() => {
      testPage.classList.remove('active');
      resultPage.classList.add('active');
    }, 3000);
  });
});
