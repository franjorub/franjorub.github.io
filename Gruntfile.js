module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    cssmin: {
      target: {
        files: [
          {
            expand: true,
            cwd: "assets/css",
            src: ["*.css", "!*.min.css"],
            dest: "assets/css",
            ext: ".min.css"
          }
        ]
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks("grunt-contrib-cssmin");

  // Default task(s).
  grunt.registerTask("minify", ["cssmin"]);
};
