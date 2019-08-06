'use strict';

(function () {
  var ESC_CODE = 27;
  var effectsMap = {
    'none': ['effects__preview--none'],
    'chrome': ['effects__preview--chrome', 'grayscale', 1, ''],
    'sepia': ['effects__preview--sepia', 'sepia', 1, ''],
    'marvin': ['effects__preview--marvin', 'invert', 100, '%'],
    'phobos': ['effects__preview--phobos', 'blur', 3, 'px'],
    'heat': ['effects__preview--heat', 'brightness', 3, '']
  };
  var sliderPin = document.querySelector('.effect-level__pin');
  // var effectValue = document.querySelector('.effect-level__value');
  var effectDepth = document.querySelector('.effect-level__depth');
  var preview = document.querySelector('.img-upload__preview img');
  var fieldsetEffects = document.querySelector('.effects');

  var limitsDrag = {
    top: 2,
    left: 0,
    right: 453
  };

  var onDragPin = function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };


    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      sliderPin.style.top = (sliderPin.offsetTop - shift.y) + 'px';
      sliderPin.style.left = (sliderPin.offsetLeft - shift.x) + 'px';
      effectDepth.style.width = (sliderPin.offsetLeft - shift.x) + 'px';

      if (sliderPin.offsetTop < limitsDrag.top) {
        sliderPin.style.top = limitsDrag.top + 'px';
      }

      if (sliderPin.offsetLeft < limitsDrag.left) {
        sliderPin.style.left = limitsDrag.left + 'px';
      }

      if (sliderPin.offsetLeft > limitsDrag.right) {
        sliderPin.style.left = limitsDrag.right + 'px';
      }

      var coords = sliderPin.style.left;
      var checkedEffect = fieldsetEffects.querySelector('.effects__radio:checked');
      var filter = effectsMap[checkedEffect.value][2] / limitsDrag.right * parseInt(coords.slice(0, -2), 10);

      preview.style.filter = effectsMap[checkedEffect.value][1] + '(' + filter + effectsMap[checkedEffect.value][3] + ')';

    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  sliderPin.addEventListener('mousedown', onDragPin);


  fieldsetEffects.addEventListener('change', function () {
    var checkedEffect = fieldsetEffects.querySelector('.effects__radio:checked');
    sliderPin.style.left = '100%';
    effectDepth.style.width = '100%';
    preview.className = '';
    preview.classList.add(effectsMap[checkedEffect.value][0]);
    preview.style.filter = '';
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
