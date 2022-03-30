let arr = [];
class Shiritori {
  constructor(arr) {
    this.arr = arr;
  }

  play(word) {
    if (arr.length === 0) {
      arr.push(word);
    } else if (
      word.charAt(0) ===
      arr[arr.length - 1].charAt(arr[arr.length - 1].length - 1)
    ) {
      if (arr.includes(word) === true) {
        console.log(`${word} already exist. Game-Over`);
      } else {
        arr.push(word);
        console.log(arr);
      }
    } else {
      console.log(
        `${word} does not start with ${arr[arr.length - 1].charAt(
          arr[arr.length - 1].length - 1
        )}`
      );
    }
  }
  get words() {
    console.log(arr);
  }
  restart() {
    arr.splice(0, arr.length);
    console.log("game restarted");
  }
}

const my_shiritori = new Shiritori();
my_shiritori.play("apple");
my_shiritori.play("ear");
my_shiritori.play("rhino");
my_shiritori.play("oxygen");
my_shiritori.play("jack");
my_shiritori.words;
my_shiritori.restart();
my_shiritori.words;
my_shiritori.play("hostess");
my_shiritori.play("stash");
my_shiritori.play("hostess");
