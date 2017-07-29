var fontStyles = [
    'normal',
    'italic',
    'oblique'
];
var fontFamilies = [
 'serif',
 'sans-serif',
 'monospace',
 'cursive',
 'fantasy',
    'system-ui'
];

var fontSizes = [
    'xx-small',
 'x-small',
 'small',
'medium',
 'large',
 'x-large',
 'xx-large',
    'smaller',
    'larger',
    'length',
    'percentage'
];
var  textDecorations = [
    'overline',
    'line-through',
    'none',
    'underline'
];

var textAligns = [
    'center',
    'right',
    'left',
    'justify'
];
var textTransforms = [
    'uppercase',
    'lowercase',
    'capitalize'
];

function getSizes(sizeType) {
    if(sizeType === 'length'){
        return Math.random()*1000 + 'px';
    }
    else if(sizeType === 'percentage'){
        return Math.random()*1000 + '%';
    }
    else {
        return sizeType;
    }

}
function generateTextSyle(text) {
    var fontStyle = 'font-style:' + getRandomItemFromArray(fontStyles) + ';';
    var fontSize = 'font-size:' + getSizes(getRandomItemFromArray(fontSizes)) + ';';
    var textDecoration = 'text-decoration:' + getRandomItemFromArray(textDecorations) + ';';
    var fontFamily = 'font-family:' + getRandomItemFromArray(fontFamilies) + ';';
    var textAlign = 'text-align:' + getRandomItemFromArray(textAligns) + ';';
    var textTransform = 'text-transform:' + getRandomItemFromArray(textTransforms) + ';';
    var color = 'color:' +  generateRandomColor() + ';';

    var style =  'style="' + color + textAlign + textDecoration + fontStyle + fontFamily + fontSize + textTransform + '"';
    var divStart = "<div " + style + ">"
    var divEnd = "</div>";
    return divStart + text + divEnd;
}

function getRandomItemFromArray(arr) {
    return arr[Math.floor(Math.random()*arr.length)]
}

function generateRandomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}