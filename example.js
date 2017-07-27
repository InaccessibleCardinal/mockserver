'use strict';
function g(){
  fetch('http://localhost:4111/')
  .then((res) => {
    return res.json();
  })
  .then((data) => console.log(data));
}
g();
