var fs = require('fs');

var profile_path = require('os').homedir() + "/.bash_profile";

try {
	fs.appendFileSync(profile_path, "\nalias webqs='git clone https://github.com/Grandclosing/WebQuickStart.git . && ls'");
	console.log("WebQuickStart has set up the 'webqs' alias for you. Next time you want to create a quick web project, make a directory, cd into it and run 'webqs'");	
} catch(e) {
	console.log(e);
}
