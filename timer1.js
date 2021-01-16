//Simple Alarm Clock / Timer App
let alarmnumArr = process.argv.slice(2);
if(alarmnumArr.length === 0) {
  return false;
} else {
  for (let i = 0; i < alarmnumArr.length; i++) {
    if(isNaN(alarmnumArr[i]) === false || (typeof(alarmnumArr[i]) === "number" && alarmnumArr[i] > 0)) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, 1000 * alarmnumArr[i]);
    } else {
      setTimeout(() => { 
      }, 10);
    }
  }
}
