
function Prime(n){
  for(let i=2; i<n; i++){
    if (n%i===0) return false;
  }
  return true;
}

function showPrime(n){
  for (let i=2; i<n; i++){
    if (Prime(i)) console.log(i);
  }
}
showPrime(10);