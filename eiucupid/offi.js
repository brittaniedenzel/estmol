/**
 * Returns a canvas filter that applies a brightness adjustment.
 * @param {number} brightness - The brightness level (1.0 for no change, >1 for brighter, <1 for darker).
 * @returns {string} - The filter string to be used with canvas or CSS.
 */
function getBrightnessFilter(brightness) {
  return `brightness(${brightness})`;
}

// Example usage with a canvas
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const img = new Image();
img.src = 'path/to/image.jpg';

img.onload = function() {
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  ctx.filter = getBrightnessFilter(1.5); // Increase brightness by 50%
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
};
