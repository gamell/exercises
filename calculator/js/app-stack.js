(function(){

  const $display = document.getElementById('display');
  let stack = [0];
  display = 0;

  function calculate() {
    if (stack.length === 3) {
      const [ val2, op, val1 ] = stack;
      console.log(`val1: ${val1}, op: ${op}, val2: ${val2}`);
      switch(op) {
        case 'sum':
          return val1 + val2;
        case 'minus':
          return val1 - val2;
      }
    } else {
      return display;
    }
  }

  function handleOp(op) {
    display = calculate();
    if (op === 'eq') {
      stack = [display];
    } else {
      stack.unshift(op);
    }
  }

  function handleNum(newVal) {
    if (!newVal) return;
    newVal = parseInt(newVal, 10);
    if (Number.isInteger(stack[0])) {
      stack[0] = parseInt('' + stack[0] + newVal);
      display = stack[0];
    } else {
      stack.unshift(newVal);
      display = newVal;
    }
  }

  function handleClick(e){
    e.preventDefault();
    const target = e.target;
    if (!target.value) return;
    target.classList.contains('operation') ?
      handleOp(target.value) :
      handleNum(target.value);
    console.log(stack)
    render();
  };

  function render(){
    $display.value = display;
  }

  const $calc = document.getElementById('calculator');
  $calc.addEventListener('click', handleClick);
  render();

})();
