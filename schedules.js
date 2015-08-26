// 5 = systems 1-2
// 13 = systems 3-4
// 3 = systems 5-6
// 12 = system 10 --correction 7-8 box 4 changed on 08-25
// 11 = systems 9
// 7 = systems 7-8 -- correction 10-11 box 6 changed on 08-25
// 8 = systems 12-13
//10 = systems 14-15
var SystemA = [
  {circ: 5, feed: 21, sec: 40},
  {circ: 3, feed: 24, sec: 30},
  {circ: 13, feed: 18, sec: 30},
  {circ: 12, feed: 22, sec: 30},
  {circ: 11, feed: 19, sec: 30}
];


var SystemB = [
  {circ: 10, feed: 16, sec: 30},
  {circ: 8, feed: 23, sec: 30},//circ was 7 changed to 8 for new system System 10-11
  {circ: 8, feed: 7, sec: 30},//added for new system in B system 10-2
  {circ: 8, feed: 15, sec: 30}
];

module.exports = { A: SystemA,
                   B: SystemB
                  };
