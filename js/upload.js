'use strict';

(function () {
  var uploadForm = document.querySelector('.img-upload__form');
  var uploadFile = uploadForm.querySelector('#upload-file');
  var uploadOverlay = uploadForm.querySelector('.img-upload__overlay');
  var uploadClose = uploadForm.querySelector('.img-upload__cancel');

  uploadFile.addEventListener('change', function () {
    uploadOverlay.classList.remove('hidden');

    uploadClose.addEventListener('click', function () {
      onClickClose();
    });

    uploadForm.reset();
  });

  var onClickClose = function () {
    uploadOverlay.classList.add('hidden');
    uploadClose.removeEventListener('click', onClickClose);
  };

})();
