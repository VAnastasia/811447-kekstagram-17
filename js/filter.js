'use strict';

(function () {
  var ESC_CODE = 27;
  var effectsMap = {
    'none': 'effects__preview--none',
    'chrome': 'effects__preview--chrome',
    'sepia': 'effects__preview--sepia',
    'marvin': 'effects__preview--marvin',
    'phobos': 'effects__preview--phobos',
    'heat': 'effects__preview--heat'
  };
  var sliderPin = document.querySelector('.effect-level__pin');
  // var effectValue = document.querySelector('.effect-level__value');
  var effectDepth = document.querySelector('.effect-level__depth');
  var preview = document.querySelector('.img-upload__preview img');
  var fieldsetEffects = document.querySelector('.effects');

  sliderPin.addEventListener('mouseup', function () {
    sliderPin.style.left = '100%';
    effectDepth.style.width = '100%';
    preview.classList.add('effects__preview--chrome');
  });

  fieldsetEffects.addEventListener('change', function () {
    var checkedEffect = fieldsetEffects.querySelector('.effects__radio:checked');
    sliderPin.style.left = '0';
    effectDepth.style.width = '0';
    preview.className = '';
    preview.classList.add(effectsMap[checkedEffect.value]);
  });

  var textDescription = document.querySelector('.text__description');

  var onTextDescriptionEsc = function (evt) {
    if (evt.keyCode === ESC_CODE) {
      evt.stopPropagation();
      textDescription.blur();
    }
  };

  var onFocusTextDescription = function () {
    textDescription.addEventListener('keydown', onTextDescriptionEsc);
  };


  textDescription.addEventListener('focus', onFocusTextDescription);
})();
