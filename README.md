# Info Buffer


This package is a queue-driven console log bus that aims to resolve conflicts when logging items to the console in an event-driven way.


## Installation

```sh
 $ npm install --save info-buffer
```


## Example

```js

const InfoBuffer = require('./index');

const buffer = new InfoBuffer();

buffer.log("log");

buffer.wait();

buffer.log("Not logged");

buffer.resume();

buffer.log("this");

buffer.broadcast();

```