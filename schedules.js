// 5 = systems 1-2
// 13 = systems 3-4
// 3 = systems 5-6
// 12 = system 10
// 11 = systems 8-9
// 7 = systems 7-11
// 8 = systems 12-13
//10 = systems 14-15
var SystemA = [
  {circ: 3, feed: 24, sec: 15},
  {circ: 11, feed: 19, sec: 15}
];


var SystemB = [
  {circ: 5, feed: 21, sec: 20},
  {circ: 7, feed: 23, sec: 20},
  {circ: 13, feed: 18, sec: 20},
  {circ: 12, feed: 22, sec: 20},
  {circ: 10, feed: 16, sec: 20},
  {circ: 8, feed: 15, sec: 20}
];

module.exports = { A: SystemA,
                   B: SystemB
                  };
