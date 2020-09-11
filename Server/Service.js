var Service = require('node-windows').Service;
// Create a new service object
var svc = new Service({
     name:'Youtube Downloader',
     description: 'A Server that allow you to download any video on youtube based on his extension',
     script: 'C:\\Users\\utilisateur\\Desktop\\Youtube downloader\\Server\\index.js'
});

// Listen for the "install" event, which indicates the
// process is available as a service.

svc.on('install',function(){
           svc.start();
});

svc.install();