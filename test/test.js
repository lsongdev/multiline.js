var multiline = require('./multiline');

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
