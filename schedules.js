// 5 = systems 1-2
// 13 = systems 3-4
// 3 = systems 5-6
// 12 = system 10 --correction 7-8 box 4 changed on 08-25
// 11 = systems 9
// 7 = systems 7-8 -- correction 10-11 box 6 changed on 08-25
// 8 = systems 12-13
//10 = systems 14-15
var SystemA = [
  {circ: 5, feed: 21, sec: 8},
  {circ: 13, feed: 18, sec: 8},
  {circ: 3, feed: 24, sec: 8},
  {circ: 11, feed: 19, sec: 8},
  {circ: 12, feed: 22, sec: 8}
];


var SystemB = [
  {circ: 12, feed: 7, sec: 25},//added for new system in B System 10
  {circ: 12, feed: 23, sec: 25},//circ was 7 changed to 8 for new system Systems 11-12
  {circ: 12, feed: 15, sec: 25},//Systems 13-14
  {circ: 12, feed: 16, sec: 30},//System 15-16
  {circ: 12, feed: 10, sec: 20}//tents system
];

module.exports = { A: SystemA,
                   B: SystemB
                  };
