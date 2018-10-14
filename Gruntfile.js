module.exports = function(grunt) {
  grunt.initConfig({

    aws: grunt.file.readJSON("aws-credentials.json"),
    s3: {
      options: {
        accessKeyId: "<%= aws.accessKeyId %>",
        secretAccessKey: "<%= aws.secretAccessKey %>",
        bucket: "sephora-productdescription",
        region: "us-west-1"
      },
      specificFiles: {
        files: [{
          src: "client/dist/bundle.js",
          dest: "productdescription.js"
        }, {
          src: "data/10M.tsv",
          dest: "10M.tsv"
        }]
      }
    },
    
    watch: {
      files: ['client/dist/bundle.js'],
      tasks: ['s3']
    }
        // jshint: {
        //   // define the files to lint
        //   files: [
        //     'Gruntfile.js', 
        //     'client/**/*.jsx', 
        //     'client/**/*.js',
        //   ],
        //   // configure JSHint (documented at http://www.jshint.com/docs/)
        //   options: {
        //     // more options here if you want to override JSHint defaults
        //     globals: {
        //       devel: true,
        //       module: true,
        //       jquery: true
        //     }
        //   }
        // },
  });

  // grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('grunt-continue');
  grunt.loadNpmTasks('grunt-aws');

  grunt.registerTask('default', [
    's3',
    'watch'
    // 'continue:on', 
    // 'jshint', 
  ]);
};