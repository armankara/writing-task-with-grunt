module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //pluginlerin kendi konfigürasyon parametrelerini
        coffee: {
            compile: {
                files: {
                    'site.js': 'coffee/site.coffee' // site.coffee'de yazdıklarımızı site.js' compile ediyoruz
                     }
                 }
             },
        less: { //pluginlerin kendi konfigürasyon parametreleri
            compile: {
                files: {
                    'site.css': 'less/site.less' // site.less'de yazdıklarımızı site.css' compile ediyoruz
                     }
                 }
            },
         });
         
    // Yüklenecek grunt plugin'leri
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    //Burada da task'leri oluşturuyoruz
    //Burada default task gidip  "coffee" ve "less" taskini çalıştırıyor
    grunt.registerTask('default', ['coffee', 'less'])
  }
