// 5 = systems 1-2
// 13 = systems 3-4
// 3 = systems 5
// 12 = system 6-7
// 11 = systems 8-9
// 7 = systems 7-8 -- correction 10-11 box 6 changed on 08-24
// 8 = systems 12-13
//10 = systems 14-15
var SystemA = [
  {circ: 5, feed: 21, sec: 9},
  {circ: 13, feed: 18, sec: 9},
  {circ: 3, feed: 24, sec: 9},
  {circ: 11, feed: 19, sec: 9},
  {circ: 12, feed: 22, sec: 9}
];


var SystemB = [
  {circ: 12, feed: 7, sec: 12},//added for new system in B System 10
  {circ: 12, feed: 23, sec: 12},//circ was 7 changed to 8 for new system Systems 11-12
  {circ: 12, feed: 15, sec: 12},//Systems 13-14
  {circ: 12, feed: 16, sec: 12},//System 15-16
  {circ: 12, feed: 10, sec: 12}
];

module.exports = { A: SystemA,
                   B: SystemB
                  };
