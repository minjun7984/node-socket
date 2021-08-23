const ROCK_STR = 'rock';
const SCISSORS_STR = 'scissors';
const PAPER_STR = 'paper';
const DRAW_STR = 'draw' //=> 승부가 안남

const judgeGame = (inputList) => {
let filterList = inputList.filter((item,index) => inputList.indexOf(item) === index);
console.log(filterList);
    if(filterList.length === 1 || filterList.length === 3){
        return DRAW_STR;
    }

    if(filterList.includes(ROCK_STR) && filterList.includes(SCISSORS_STR)){
        return ROCK_STR;
    }
    else if(filterList.includes(PAPER_STR) && filterList.includes(SCISSORS_STR)){
        return SCISSORS_STR;
    }
    else if(filterList.includes(PAPER_STR) && filterList.includes(ROCK_STR)){
        return PAPER_STR;
    }
};

test('가위바위보 테스트1', () => {
    //given
    const inputList1 = [ROCK_STR, ROCK_STR, ROCK_STR, ROCK_STR];

    const inputList2 = [PAPER_STR,PAPER_STR];
    const inputList3 = [SCISSORS_STR,SCISSORS_STR,SCISSORS_STR];
    
    //when
    const result1 = judgeGame(inputList1);
    const result2 = judgeGame(inputList2);
    const result3 = judgeGame(inputList3);
    
    //then
    expect(result1).toBe(DRAW_STR);
    expect(result2).toBe(DRAW_STR);
    expect(result3).toBe(DRAW_STR);
});

test('가위바위보 테스트2', () => {
    //given
    const inputList1 = [ROCK_STR, PAPER_STR, SCISSORS_STR, ROCK_STR];
    const inputList2 = [PAPER_STR, SCISSORS_STR, SCISSORS_STR, ROCK_STR];
    
    //when
    const result1 = judgeGame(inputList1);
    const result2 = judgeGame(inputList2);
    
    //then
    expect(result1).toBe(DRAW_STR);
    expect(result2).toBe(DRAW_STR);
});

test('가위바위보 테스트3', () => {
    //given
    const inputList1 = [ROCK_STR, PAPER_STR];
    const inputList2 = [PAPER_STR, SCISSORS_STR, SCISSORS_STR, SCISSORS_STR];
    const inputList3 = [SCISSORS_STR, SCISSORS_STR, ROCK_STR, ROCK_STR];

    //when
    const result1 = judgeGame(inputList1);
    const result2 = judgeGame(inputList2);
    const result3 = judgeGame(inputList3);
    
    //then
    expect(result1).toBe(PAPER_STR);
    expect(result2).toBe(SCISSORS_STR);
    expect(result3).toBe(ROCK_STR);
});

