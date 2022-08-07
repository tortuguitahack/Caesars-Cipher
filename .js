function rot13(str) {
  const conversions = {
	'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz': 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
  };

  let translation = '';

  if (str.match(/^[a-zA-Z]/)) {
    for (let char of str) {
      for (
        let [input, output] of Object.entries(conversions)
        ) {
        for (let i = 0; i < input.length; i++) {
          if (char === input[i]) {
            translation += output[i];
          }
        }
      }
      if (!char.match(/^[a-zA-Z]/)) {      
			  translation += char;
      }
    }
  }

  return translation;
}

rot13("SERR PBQR PNZC");
