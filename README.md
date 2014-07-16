# multiline.js

## Multiline strings in JavaScript

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

## Thanks

Inspired by [multiline](https://gneithub.com/sindresorhus/multiline) .

## License

MIT <http://lsong.mit-license.org>
