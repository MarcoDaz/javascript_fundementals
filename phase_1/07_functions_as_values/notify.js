// 1. Declare a function `notifyByEmail` that accepts an email address as argument and
//    returns the string `'Email sent to: <EMAIL>'`.
const notifyByEmail = email => `Email sent to: ${email}`;

// 2. Declare a function `notifyByText` that accepts a phone number (as a string) as argument
//    and returns the string `'Text sent to: <PHONE NUMBER>'`.
const notifyByText = number => `Text sent to: ${number}`;

// 3. Now declare a generic function `notify` that accepts a first string argument (either an
//    email or a phone), and *the function to use* in second argument. This function should
//    only rely on calling the function passed in second argument, not declare a string by
//    itself.
const notify = (str, notifyFunction) => {
  console.log(notifyFunction(str));
};

// 4. Use the function `notify` with the two previous functions to:
//     * send an email to `hello@makers.tech.test` and get the expected output.
//     * send a text to `+10000000000` and get the expected output.
notify('hello@makers.tech.test', notifyByEmail);
notify('+10000000000', notifyByText);