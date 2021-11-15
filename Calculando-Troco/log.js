let log = [];

function registerLog(value, valueReceived ){
  log.push(`Passageiro ${log.length + 1 } pagou ${valueReceived}, troco ${ valueReceived - value}`);
}

function removeOptions(selectElement) {
  var i, L = selectElement.options.length - 1;
  for(i = L; i >= 0; i--) {
     selectElement.remove(i);
  }
}

function showLog(){
  const select = document.getElementById('passlista');

  removeOptions(select);

  log.forEach((logItem) => { 
    const item = document.createElement('option');
    item.value = logItem;
    item.innerHTML = logItem;
    select.appendChild(item);
  })
}

function clearLog(){
  log = [];
}