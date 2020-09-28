

function logInBox(text) {
  let textLength = text.length;
  logHorizontalBorder(textLength);
  logVerticalPadding(textLength);
  console.log('| ' + text + ' |');
  logVerticalPadding(textLength);
  logHorizontalBorder(textLength);
}

function logVerticalPadding(textLength) {
  let logString = '|  ';
  for (count = 0; count < textLength; count += 1) {
    logString += ' ';
  }
  console.log(logString + '|');
}

function logHorizontalBorder(textLength) {
  let logString = '+--'
  for (count = 0; count < textLength; count += 1) {
    logString += '-';
  }
  console.log(logString + '+');
}

logInBox('sdfjdfdjsfdf');
logInBox('To boldly go where no one has gone before.');
logInBox('');