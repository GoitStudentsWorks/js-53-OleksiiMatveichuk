//import { resolveBaseUrl } from 'vite';
//import { resolveConfig } from 'vite';
import { createModal1 } from './createModal1';
import { api } from './low-level/api';

const listCharacters = [];
const ulList = document.querySelector('.random-list');
const clickBtn = document.querySelector('.allCharactersBtn');
clickBtn.addEventListener('click', createModal1);
const img = document.querySelector('.random-img');

ulList.addEventListener('click', handleClickItem);

async function getRandomData(params) {
  const data = await api.getAllCharacters(params);

  listCharacters.push(data.results);
  return data;
}

function newImg({ resourceURI }) {
  img.src = `${resourceURI}`;
}

function handleClickItem(e) {
  if (e.target.tagName !== 'UL') {
    let li = document.querySelectorAll('li');
    const id = e.target.closest('li').id;

    const result = listCharacters.find(
      character => character[0].id === Number(id)
    );

    newImg(result[0]);

    let i = 0;
    li.forEach(item => {
      let activeLink = document.querySelector('.random-item.active');
      const p = item.querySelector('p');

      if (activeLink) {
        activeLink.classList.remove('active');
      }
      e.target.closest('li').classList.add('active');

      //   if (item.id === id) {
      //     console.log(id, 'Так');
      //     e.target.closest('li').classList.add('activ');
      //   } else {
      //     console.log(id, 'ні');
      //     e.target.closest('li').classList.remove('activ');
      //   }
      // ?
      // : ;
    });
  }
}

function createLi(value) {
  return `
    <li class='random-item' id=${value[0].id}>
       <h3 class='random-value-name hero-name'>${value[0].name}</h3>
       <p class='random-value-text'>${value[0].description}</p>
    </li>
    `;
}

function gerRandomCharacters(data) {
  console.log('DATA', data);
  return data.map(character => createLi(character.results)).join('');
}

//async function startMain() {
// for (let i = 0; i < 5; i += 1) {
//   await getRandomData({
//     limit: 1,
//     offset: Math.round(Math.random() * 1561),
//   });
// }
// const d1 = new Date();
// await promise();
// const d2 = new Date();
// console.log('time: ', (d2 - d1) / 60);
// //const markup = gerRandomCharacters(listCharacters);
// // ulList.innerHTML = markup;
// const newIMG = document.createElement('img');
// newIMG.src = listCharacters[0][0].resourceURI;
// ulList.insertAdjacentElement('beforebegin', newIMG);
// img.src = listCharacters[0][0].resourceURI;
//}
//startMain();

//================promise

// async function promise() {
//   const promiseArray = [];
//   for (let i = 0; i < 5; i += 1) {
//     const res = await getRandomData({
//       limit: 1,
//       offset: Math.round(Math.random() * 1561),
//     });
//     //promiseArray.push(res);
//   }
//   // console.log('promiseArray', promiseArray);
//   Promise.all(promiseArray);
// }
async function startMain() {
  const promiseArray = [];
  for (let i = 0; i < 5; i += 1) {
    const res = new Promise(resolve => {
      const result = getRandomData({
        limit: 1,
        offset: Math.round(Math.random() * 1561),
      });
      console.log('result', result);
      promiseArray.push(result);
    });
  }
  console.log('promiseArray', promiseArray);
  Promise.all(promiseArray)
    .then(data => {
      console.log('XXX', data);
      createMarkup(data);
    })
    .catch(er => console.log('ERR', er));
}

function createMarkup(data) {
  console.log('tyt');
  const markup = gerRandomCharacters(data);
  console.log('markup', markup);
  ulList.innerHTML = markup;
}
startMain();
