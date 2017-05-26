
var fs = require('fs');

try {
	fs.appendFileSync('~/.bash_profile', "\nalias webqs='git clone https://github.com/Grandclosing/WebQuickStart.git && mv WebQuickStart/* ./ && mv WebQuickStart/.gitignore ./ && rm -rf WebQuickStart/ && ls");
	console.log("WebQuickStart has set up the 'webqs' alias for you. Next time you want to create a quick web project, make a directory, cd into it and run 'webqs'");	
} catch(e) {}
