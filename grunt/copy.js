module.exports = {
  html: {
    files: [
      {expand: true, cwd: 'src/', src: ['*.html'], dest: 'dist', filter: 'isFile'},      
    ]
  }
};
