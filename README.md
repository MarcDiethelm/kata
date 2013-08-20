# Node.js Dev Kata Setup

This setup is using

- [Mocha](http://visionmedia.github.io/mocha/) as the testing framework.
- The standard Node.js [assertion module](http://nodejs.org/api/assert.html) `assert`.
- The "Spec" reporter for test output.

To create a new Kata just create a new test and a new library in `lib/`. See `test/oeffnungszeiten.js` and the code it's testing `lib/oeffnungszeiten.js` for a usage example.

## Installation

- Install [Node.js](http://nodejs.org)
- Then:

```Bash
npm install
```

Run a specific test with

```Bash
mocha test/filename.js
```