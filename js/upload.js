'use strict';

(function () {
  var ESC_CODE = 27;
  var uploadForm = document.querySelector('.img-upload__form');
  var uploadFile = uploadForm.querySelector('#upload-file');
  var uploadOverlay = uploadForm.querySelector('.img-upload__overlay');
  var uploadClose = uploadForm.querySelector('.img-upload__cancel');

  uploadFile.addEventListener('change', function () {
    uploadOverlay.classList.remove('hidden');

    uploadClose.addEventListener('click', function () {
      onClickClose();
    });

    document.addEventListener('keydown', function (evt) {
      if (evt.keyCode === ESC_CODE) {
        onClickClose();
      }
    });

    uploadForm.reset();
  });

  var onClickClose = function () {
    uploadOverlay.classList.add('hidden');
    uploadClose.removeEventListener('click', onClickClose);
    document.removeEventListener('keydown', onClickClose);
  };

})();
