const fidgets = [
  {
    id: 1,
    name: "멜로",
    description: "말랑이 온라인의 대표 캐릭터! 귀여운 아기 유령이에요",
  },
  {
    id: 2,
    name: "샤베토",
    description: "크리스마스에 태어난 귀여운 눈토끼",
  },
  {
    id: 3,
    name: "샤베토",
    description: "크리스마스에 태어난 귀여운 눈토끼",
  },
  {
    id: 4,
    name: "지켜줄개",
    description: "든든한 댕댕이",
  },
  {
    id: 5,
    name: "지켜줄개",
    description: "든든한 댕댕이",
  },
  {
    id: 6,
    name: "지켜줄개",
    description: "든든한 댕댕이",
  },
  {
    id: 7,
    name: "잘될고양",
    description: "괜찮아 잘 될고양!",
  },
  {
    id: 8,
    name: "잘될고양",
    description: "괜찮아 잘 될고양!",
  },
];

// 문제 1
// id 로 fidget을 찾는 findFidgetById 함수를 작성해주세요
function findFidgetById() {
  // 여기에 코딩 해주세요
}

const foundedFidget1 = findFidgetById(3);
console.log(foundedFidget1);

// 문제 2
// findFidgetById의 성능을 개선해주세요.
// 매번 리스트를 돌면서 id를 하나씩 확인하는건 별로 좋은 방법은 아닌것 같네요.
// (어떤 자료구조가 이 문제를 해결하는데 적합할까요?)

// 문제 3
// 문제 1에서 생각해낸 자료구조를 reduce 메소드를 이용하여 만들어 주세요

// 문제 4
// 3초 후 랜덤한 말랑이를 선택해주는 chooseFidget함수를 만들어주세요 chooseFidget 함수의 리턴값은 Promise 이어야 해요.

// 문제 5
// Nodejs에서의 비동기 처리를 최대한 자세하게 설명해주세요
