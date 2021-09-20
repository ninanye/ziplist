function zipList(firstList, secondList) {
  const newList = [];
  for (let i = 0; i < firstList.length; i++) {
    newList.push(firstList[i]);
    newList.push(secondList[i]);
  }
  return newList;
}

function zipListTheSimpleWay(firstList, secondList) {
  const zippedList = _.zip(firstList, secondList);
  return _.flatten(zippedList);
}

const firstList = ['a', 'b', 'c'];
const secondList = [1, 2, 3];
console.log(zipList(firstList, secondList));
console.log(zipListTheSimpleWay(firstList, secondList));
