for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
  }
  const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);
function writeCards(namesArray, eventName) {
    const messagesArray = [];
  
    for (let i = 0; i < namesArray.length; i++) {
      const message = `Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`;
      messagesArray.push(message);
    }
  
    return messagesArray;
  }
  const names = ['Alice', 'Bob', 'Charlie'];
const event = 'birthday';

const messages = writeCards(names, event);
console.log(messages);
[  "Thank you, Alice, for the wonderful birthday gift!",  "Thank you, Bob, for the wonderful birthday gift!",  "Thank you, Charlie, for the wonderful birthday gift!"]
function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }
  countDown(10);
  10
  9
  8
  7
  6
  5
  4
  3
  2
  1
  0
  