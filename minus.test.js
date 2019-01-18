const sum = require('./minus');
// 12 - 10 = 2
test('12 - 10 = 2', ()=> {
  expect(sum(12,10)).toBe(2);
});

// 78 - 22 = 56
test('78 - 22 = 56', () =>{
  expect(sum(78,22)).toBe(56);
});

// 100 - 55 = 45
test('100 - 55 = 45', () =>{
  expect(sum(100,55)).toBe(45);
}); 

// 110 - 60 = 50
test('110 - 60 = 50',() =>{
  expect(sum(110,60)).toBe(50);
});

// 100 - 20 = 80
test('100 - 20 = 80',() =>{
    expect(sum(100,20)).toBe(80);
  });