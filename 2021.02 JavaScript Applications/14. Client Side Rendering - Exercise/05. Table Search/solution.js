import { html, render } from 'https://unpkg.com/lit-html?module';

const endpoint = 'http://localhost:3030/jsonstore/advanced/table';

const rowTemplate = (student, select) => html`
   <tr class=${select ? 'select' : ''}>
       <td>${student.firstName} ${student.lastName}</td>
       <td>${student.email}</td>
       <td>${student.course}</td>
   </tr>`;

const input = document.getElementById('searchField');

start();

async function start() {
   document.querySelector('#searchBtn').addEventListener('click', () => {
      update(list, input.value);
   });

   const response = await fetch(endpoint);
   const data = await response.json();
   const list = Object.values(data);
   update(list);
}

function search(item, match) {
   return Object.values(item).some(v => match && v.toLowerCase().includes(match.toLowerCase()));
}

const tbody = document.querySelector('tbody');

function update(list, match = '') {
   const result = list.map(e => rowTemplate(e, search(e, match)));
   render(result, tbody);
}