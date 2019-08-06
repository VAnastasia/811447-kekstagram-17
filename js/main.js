'use strict';
(function () {
  var createPhoto = function (obj) {
    var photoTemplate = document.querySelector('#picture')
          .content
          .querySelector('.picture');

    var photoElement = photoTemplate.cloneNode(true);
    photoElement.querySelector('img').src = obj.url;
    photoElement.querySelector('.picture__likes').textContent = obj.likes;
    photoElement.querySelector('.picture__comments').textContent = obj.comments.length;
    return photoElement;
  };

  var onLoad = function (response) {
    var pictures = document.querySelector('.pictures');
    var fragment = document.createDocumentFragment();
    response.forEach(function (elem) {
      fragment.appendChild(createPhoto(elem));
    });
    pictures.appendChild(fragment);
  };

  var onError = function () {
    console.log('onError');
  };

  window.backend.load(onLoad, onError, 'GET', 'https://js.dump.academy/kekstagram/data');

})();
