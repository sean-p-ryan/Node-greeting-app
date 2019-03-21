const greetings = require("./greeting.js");
const newModule = require("./new-module.js");

// "Hello"
greetings.greetingEnglish();

// "Konichiwa"
greetings.greetingJapanese();

greetings.greetingSpanish();

greetings.greetingIcelandic();

newModule.date();

newModule.tick();
