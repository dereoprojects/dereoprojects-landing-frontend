export function shuffleArray(array: any[]): any[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Random index
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

// Utility function to calculate actual dimensions
export function calculateActualDimensions(
  parentWidth: number,
  parentHeight: number,
  artboardWidth: number,
  artboardHeight: number
): { width: number; height: number } {
  const artboardRatio = artboardWidth / artboardHeight;
  const parentRatio = parentWidth / parentHeight;

  let actualWidth, actualHeight;

  if (parentRatio > artboardRatio) {
    // Fit to height
    actualHeight = parentHeight;
    actualWidth = artboardRatio * parentHeight;
  } else {
    // Fit to width
    actualWidth = parentWidth;
    actualHeight = parentWidth / artboardRatio;
  }

  return { width: actualWidth, height: actualHeight };
}
