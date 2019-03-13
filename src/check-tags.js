export function checkTags(someTextFromInput){
  let x = someTextFromInput.value;
  x = x.replace(/</gi, '');
  x = x.replace(/>/gi, '');
  console.log(x);
  someTextFromInput.value = x;
  console.log(someTextFromInput.value);
}
