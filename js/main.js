'use strict';

var NUMBER_OBJECTS = 25;
var LIKES_AMOUNT_START = 15;
var LIKES_AMOUNT_FINISH = 200;
var NUMBER_AVATARS = 6;
var COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
var NAMES = ['Тирион Ланнистер', 'Дрогон', 'Серсея Ланнистер', 'Арья Старк', 'Мессандея', 'Дейнерис Таргариен'];

var generateOrdinalNumbers = function (amount) {
  var urls = [];
  for (var i = 0; i < amount; i++) {
    urls[i] = i + 1;
  }
  return urls;
};

var shuffle = function (arr) {
  var j;
  var temp;
  for (var i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
  return arr;
};

var getRandomItem = function (array) {
  return array[Math.round(Math.random() * (array.length - 1))];
};

var getRandomNumber = function (start, finish) {
  return Math.round(Math.random() * (Math.abs(finish - start)) + start);
};

var generateObjects = function (amount, avatars) {
  var numbers = generateOrdinalNumbers(amount);
  var numberAvatars = generateOrdinalNumbers(avatars);
  var arrObjects = [];
  for (var i = 0; i < numbers.length; i++) {
    var obj = {
      avatar: 'img/avatar-' + getRandomItem(numberAvatars) + '.svg',
      message: getRandomItem(COMMENTS),
      name: getRandomItem(NAMES)
    };
    arrObjects.push(obj);
  }
  return arrObjects;
};

var createPhoto = function (obj, url) {
  var photoTemplate = document.querySelector('#picture')
        .content
        .querySelector('.picture');

  var photoElement = photoTemplate.cloneNode(true);
  photoElement.querySelector('img').src = 'photos/' + url + '.jpg';
  photoElement.querySelector('.picture__likes').textContent = getRandomNumber(LIKES_AMOUNT_START, LIKES_AMOUNT_FINISH);
  photoElement.querySelector('.picture__comments').textContent = getRandomItem(COMMENTS);
  return photoElement;
};

var addPhotos = function () {
  var pictures = document.querySelector('.pictures');
  var fragment = document.createDocumentFragment();
  var photos = generateObjects(NUMBER_OBJECTS, NUMBER_AVATARS);
  var urls = shuffle(generateOrdinalNumbers(NUMBER_OBJECTS));
  for (var i = 0; i < photos.length; i++) {
    fragment.appendChild(createPhoto(photos[i], urls[i]));
  }
  pictures.appendChild(fragment);
};

addPhotos();

console.log(generateObjects(NUMBER_OBJECTS, NUMBER_AVATARS));
