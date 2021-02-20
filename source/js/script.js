const students = [
  {
    id:1,
    name: `Саша`,
    rating:8,
    processed: false
  },
  {
    id:2,
    name: `Миша`,
    rating:5,
    processed: false
  },
  {
    id:3,
    name: `Сережа`,
    rating:7,
    processed: false
  }
]

const processingForEach = (elem) => {
  console.log(`processingFunction`);
  elem.processed = !elem.processed;
  elem.rating = elem.rating + 1;
  console.log(elem);
}

console.log('Метод forEach()');
students.forEach(element => processingForEach(element));

const funcFilter = (elem) => {
  if (elem.rating > 7){
    return true;
  } else {
    return false;
  }
}

console.log('Метод filter()');
let stFilter = students.filter(item => funcFilter(item));
console.log(stFilter);

const funcMap = (elem) => {
  delete elem.processed;
  if (elem.rating > 7){
    elem.status = `Отличник`
  } else {
    elem.status = `Ударник`
  }
  return elem;
}
console.log('Метод map()');
let studentsMap = students.map(item => funcMap(item));
console.log(studentsMap);

console.log('Метод every()');
let stEvery = students.every(item => funcFilter(item));
console.log(stEvery);

console.log('Метод some()');
let stSome = students.some(item => funcFilter(item));
console.log(stSome);


const filmList = [
  {
    id: 1,
    name: `Наруто`,
    genre: [`Драма`, `Аниме`, `Боевик`],
  },
  {
    id: 2,
    name: `Жизнь Енота`,
    genre: [`Документальный`, `Анималистика`],
  },
  {
    id: 3,
    name: `Мемуары Валерия Жмышенко`,
    genre: [`Биография`, `Драма`],
  },
  {
    id: 4,
    name: `Крестный отец`,
    genre: [`Драма`, `Боевик`]
  }
]
console.log('Выкладки по reduce()');
console.log(filmList);
let ratingSum = students.reduce((acc, item) => {
  return acc + item.rating;
},0);
console.log(ratingSum);
console.log(`-----`);

let ratingAverage = students.reduce((acc, item, index, array) =>{
  acc += item.rating;
  if (index === array.length-1){
    return acc/array.length;
  } else {
    return acc;
  }
},0);
console.log(ratingAverage);
console.log(`-----`);
let genreCount = filmList.reduce((acc, item) => {
  item.genre.forEach(elem =>{
    if(!acc[elem]){
      acc[elem] = 1;
    } else {
      acc[elem] = acc[elem] + 1;
    }
  })
  return acc;
}, []);

console.log(genreCount);


