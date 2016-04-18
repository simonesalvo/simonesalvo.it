 // set up the base pattern
  var pattern = Trianglify({
  cell_size: 50,
  variance: 1,
  x_colors: 'random',
  y_colors: 'match_x',
  palette: Trianglify.colorbrewer,
  color_space: 'lab',
  color_function: false,
  stroke_width: 1.51,
  width:screen.width,
  height:screen.height,
  seed: null
}); 

  // canvas
  var canvasDiv = document.getElementById('backgroundDiv');
  canvasDiv.class = 'background';
  canvasDiv.appendChild(pattern.canvas());
