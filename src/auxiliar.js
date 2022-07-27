const Image = sequelize.define('image', {
  data: {
	type: Sequelize.BLOB('long')
  }
});

var fs = require('fs');
var imageData = fs.readFileSync('/path/to/file');

Image.create({
	data: imageData
}).then(image => {
	try{
		fs.writeFileSync('/path/to/file', image.data);				
	}catch(e){
		console.log(e);
	}
})