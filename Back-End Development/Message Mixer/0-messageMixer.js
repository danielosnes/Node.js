/*
Message Mixer Inc. offers a message-encryption service that transforms input text, using various #ciphers and displays the encrypted message to the console.

There are three encryption methods provided by this service:
1. A "Caesar Cipher"
    In which the characters of the input message are shifted alphabetically by a given amount.
2. A "Symbol Cipher"
    In which select characters from the input message are replaced with visually similar symbols.
3. A "Reverse Cipher" 
    In which each word of the input message is reversed in place.

To use this service, run the command below

node message-mixer.js ['caesar'|'symbol'|'reverse'] [amount]

Here are some examples of running this program:

$ node message-mixer.js caesar 4
Enter the message you would like to encrypt...
> hello world

Here is your encrypted message:
> lipps asvph

$ node message-mixer.js 'reverse'
Enter the message you would like to encrypt...
> hello world

Here is your encrypted message:
> olleh dlrow


At present, Message Mixer Inc. sells their encryption service as a program in a single file called [message-mixer.js]. 
This single file includes:
    1. The functions that perform the encryptions listed above.
    2. The code for retrieving the user input.
    3. The code for displaying the output back to the user.

Message Mixer Inc now wants to joint the open-source community by packaging its encryption functions in a module and 
allowing other developers to import these ecryption functions into their own projects.

In this project, you will help Message Mixer Ink extract and isolate its encryption functions into a module called [encryptors.js]
and then refactor [message-mixer.js] to use this module's functions.

Before you begin, try running the commands listed above in the terminal.
Then familiarize yourself with how the program works by examining the three files in the file directiory, focusing on [message-mixer.js].
At the top of the file you will find the three encryptioncipher functions.
Towards the bottom of the file you will find some code that uses the [process.argv], [process.stdin] and [process.stdout] environment variables to determine
which encryption method to use, parse the user input and display the encrypted message.

// Import the functions from encryptors.js here.

// Encryption Functions
/////////////////////////////////////////////

const caesarCipher = (str, amount = 0) => {
  if (amount < 0) {
    return caesarCipher(str, amount + 26);
  }
  let output = '';
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char.match(/[a-z]/i)) {
      let code = str.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        char = String.fromCharCode(((code - 65 + amount) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        char = String.fromCharCode(((code - 97 + amount) % 26) + 97);
      }
    }
    output += char;
  }
  return output;
};

const symbolCipher = (str) => {
  const symbols = {
    'i': '!',
    '!': 'i',
    'l': '1',
    '1': 'l',
    's': '$',
    '$': 's',
    'o': '0',
    '0': 'o',
    'a': '@',
    '@': 'a',
    'e': '3',
    '3': 'e',
    'b': '6',
    '6': 'b'
  }

  let output = '';
  for (let i = 0; i < str.length; i++) {
    let char = str.toLowerCase()[i];

    if (symbols[char]) {
      output += symbols[char]
    } else {
      output += char;
    }
  }
  return output;
}

const reverseCipher = (sentence) => {
  let words = sentence.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].split('').reverse().join('');
  }
   return words.join(' ');
};

// User Input / Output Logic
/////////////////////////////////////////////

const encryptionMethod = getEncryptionMethod();
process.stdin.on('data', (userInput) => {
  displayEncryptedMessage(encryptionMethod, userInput);
});

// Helper function for determining which cipher method
// the user chose when they ran the program. 
function getEncryptionMethod() {
  let encryptionMethod;
  
  const encryptionType = process.argv[2];  
  if (encryptionType === 'symbol') {
    encryptionMethod = symbolCipher;
  } else if (encryptionType === 'reverse') {
    encryptionMethod = reverseCipher;
  } else if (encryptionType === 'caesar') {
    let amount = Number(process.argv[3]);
    if (Number.isNaN(amount)) {
      process.stdout.write(`Try again with a valid amount argument. \n`)
      process.exit();  
    }
    encryptionMethod = (str) => caesarCipher(str, amount);
  } 
  else {
    process.stdout.write(`Try again with a valid encryption type. \n`)
    process.exit();
  }

  process.stdout.write('Enter the message you would like to encrypt...\n> ');
  return encryptionMethod;
}

// Helper function for displaying the encrypted message to the user. 
function displayEncryptedMessage(encryptionMethod, userInput) {
  let str = userInput.toString().trim();    
  let output = encryptionMethod(str);
  process.stdout.write(`\nHere is your encrypted message:\n> ${output}\n`)
  process.exit();
}

*/

/*

*/