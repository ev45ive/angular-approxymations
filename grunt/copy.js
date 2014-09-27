module.exports = {
  html: {
    files: [
      {expand: true, cwd: 'src/', src: ['**.html'], dest: 'dist', filter: 'isFile'},   
      {expand: true, cwd: 'src/', src: ['views/**.html'], dest: 'dist', filter: 'isFile'},      
    ]
  }
};
