# multiline.js

## Multiline strings in JavaScript

[![NPM](https://nodei.co/npm/multiline.js.png)](https://nodei.co/npm/multiline.js/)

### Before

```js
var str = '' +
"<!doctype html>" +
"<html>" +
"	<head>" +
"		<title>" + title + "</title>" +
"	</head>" +
"	<body>" +
"		<h1>Hello " + name + ", I'm " + age + " years old. </h1>" +
"	</body>" +
"</html>" +
";
```

### After

```js
var str = multiline(function(){/*
	<!DOCTYPE html>
	<html>
	<head>
		<title>#{ title }</title>
	</head>
	<body>
		<h1>Hello #{name}, I'm #{age} years old. </h1>
	</body>
	</html>
*/}, { name: 'lsong', age: 25, title: 'Homepage' });

console.log(str);
```

## Install

### Browser side

```html
<script src="./js/multiline.js" ></script>
```

### Node.js

```js
npm install multiline.js --save
```

## Thanks

Inspired by [multiline](https://github.com/sindresorhus/multiline) .

## License

The MIT License (MIT)

Copyright (c) 2014 Lsong

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
