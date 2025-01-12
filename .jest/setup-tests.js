// setup-test.js
import "@testing-library/jest-dom";

// Adicionando o polyfill para o TextEncoder
global.TextEncoder = require('util').TextEncoder;
