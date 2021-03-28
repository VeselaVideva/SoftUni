function solve() {
  const input = document.getElementById('text').value;
  const caseType = document.getElementById('naming-convention').value;
  const result = document.getElementById('result');

  function camelCase(e) {
      let arr = e.toLowerCase().split(' ');
      let output = [arr[0]];
      for (let i = 1; i < arr.length; i++) {
          let current = arr[i][0].toUpperCase() + arr[i].substring(1);
          output.push(current);
      }
      return output.join('');
  }

  function pascalCase(e) {
      let arr = e.toLowerCase().split(' ');
      let output = [];
      for (let i = 0; i < arr.length; i++) {
          let current = arr[i][0].toUpperCase() + arr[i].substring(1);
          output.push(current);
      }
      return output.join('');
  }

  if (caseType === 'Camel Case') {
      result.textContent = camelCase(input);
  } else if (caseType === 'Pascal Case') {
      result.textContent = pascalCase(input);
  } else {
      result.textContent = `Error!`;
  }

}