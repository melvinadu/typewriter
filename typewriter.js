const sentence = "hello there from lighthouse labs";

let second = 1000;

for (const char of sentence) {

  setTimeout(() => {
    process.stdout.write(char);
  }, second)
  
  second += 1000;
}

setTimeout(() => {
  process.stdout.write("\n");
}, 33000)

