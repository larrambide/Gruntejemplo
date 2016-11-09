//Lee todas las tareas automatizadas de grunt
require('load-grunt-task')(grunt);

//Estructura básica de grunt
module.exports=function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
  less: {
  development: {
    options: {
      paths: ["assets/css"]
    },
    files: {
      "css/style.css": "less/*.less"
    }
   } 
  });
    
//  Automatizar less y comprimirlo
  grunt.loadTasks('grunt-contrib-less');
}