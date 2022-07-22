let numberOfPicture = 0;
let widthOfPicture = 0;

function ChangePictures(element, slaiderFilm, left, right) {
  if (
    element.target.className == "right" ||
    element.target.className == "arrow-right"
  ) {
    widthOfPicture = widthOfPicture - 600;
    slaiderFilm.style.left = widthOfPicture + "px";
    numberOfPicture += 1;
  }
  if (
    element.target.className == "left" ||
    element.target.className == "arrow-left"
  ) {
    widthOfPicture = widthOfPicture + 600;
    slaiderFilm.style.left = widthOfPicture + "px";
    numberOfPicture = numberOfPicture - 1;
  }
  if (numberOfPicture == 4) {
    right.style.pointerEvents = "none";
  } else right.style.pointerEvents = "auto";
  if (numberOfPicture > 0) {
    left.style.pointerEvents = "auto";
  } else left.style.pointerEvents = "none";
}

export default ChangePictures;
