(function(){

  const $display = document.getElementById('display');
  let state = {
    display: 0,
    ops: (a) => a,
    resetDisplay: true,
  }

  function calculate(state) {
    const { display, ops } = state;
    if (display && ops) {
      const res = ops(display);
      return {
        display: res,
        resetDisplay: true,
        ops: null
      };
    }
  }

  function handleOp(op, state) {
    const { display, ops } = state;
    const curr = ops(display);
    switch(op) {
      case 'sum':
        return {
           display: curr,
           resetDisplay: true,
           ops: (nextVal) => curr + nextVal
        };
      case 'minus':
        return {
          display: curr,
          resetDisplay: true,
          ops: (nextVal) => curr - nextVal
        };
      case 'eq':
        return calculate(state);
      default: return;
    }
  }

  function handleNum(newVal, state) {
    if (!newVal) return state;
    return {
      ...state,
      resetDisplay: false,
      display: state.resetDisplay ?
        parseInt('' + newVal, 10) :
        parseInt('' + state.display + newVal, 10)
    };
  }

  function handleClick(e){
    e.preventDefault();
    const target = e.target;
    if (!target.value) return;
    state = target.classList.contains('operation') ?
      handleOp(target.value, state) :
      handleNum(target.value, state);
    render(state);
  };

  function render(state){
    $display.value = state.display;
  }

  const $calc = document.getElementById('calculator');
  $calc.addEventListener('click', handleClick);

  render(state);

})();
