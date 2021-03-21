let i = 0;
const temp = [];

const increment = () => {
  i++;
  temp.push(new Array(100));
  increment();
}

const memoryLeak = () => {
  const array = [];
  return function () {
    array.push(new Array(10000000));
  }
}

document.querySelector('.stack-overflow').addEventListener('click', () => {
  try {
    increment();
  }
  catch(e) {
    console.log(e.message);
    console.log('Maximum stack size is', i, 'in your current browser');
  }
});

document.querySelector('.memory-leak').addEventListener('click', () => {
  const leak = memoryLeak();
  setInterval(leak, 1000);
});
