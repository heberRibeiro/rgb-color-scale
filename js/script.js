window.addEventListener('load', start);

function start() {
  var redRange = document.querySelector('#red-range');
  var greenRange = document.querySelector('#green-range');
  var blueRange = document.querySelector('#blue-range');

  var redText = document.querySelector('#red-text');
  var greenText = document.querySelector('#green-text');
  var blueText = document.querySelector('#blue-text');

  var divColor = document.querySelector('#scale-color');

  redText.value = redRange.value;
  greenText.value = greenRange.value;
  blueText.value = blueRange.value;

  redRange.addEventListener('input', rangeChange);
  greenRange.addEventListener('input', rangeChange);
  blueRange.addEventListener('input', rangeChange);

  redText.addEventListener('input', textChange);
  greenText.addEventListener('input', textChange);
  blueText.addEventListener('input', textChange);

  colorChange();

  function rangeChange(event) {
    /**
     * Identifies which input range has changed by capturing the element id,
     * from there it assigns the value of the range to the input text.
     */
    switch (event.target.id) {
      case 'red-range':
        var redRangeValue = event.target.value;
        redText.value = redRangeValue;
        break;
      case 'green-range':
        var greenRangeValue = event.target.value;
        greenText.value = greenRangeValue;
        break;
      case 'blue-range':
        var blueRangeValue = event.target.value;
        blueText.value = blueRangeValue;
        break;
      default:
        break;
    }
    colorChange();
  }

  function textChange(event) {
    /**
     * Identifies which input text has changed by capturing the element id,
     * from there it assigns the value of the text to the input range.
     */
    switch (event.target.id) {
      case 'red-text':
        var redTextValue = event.target.value;
        redRange.value = redTextValue;
        break;
      case 'green-text':
        var greenTextValue = event.target.value;
        greenRange.value = greenTextValue;
        break;
      case 'blue-text':
        var blueTextValue = event.target.value;
        blueRange.value = blueTextValue;
        break;
      default:
        break;
    }
    colorChange();
  }

  function colorChange() {
    divColor.style.backgroundColor = `rgb( 
      ${redRange.value},
      ${greenRange.value},
      ${blueRange.value}
      )`;
  }
}
