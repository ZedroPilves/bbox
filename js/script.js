
  console.log("O JavaScript está sendo executado.");

  // Get the image elements
  var images = document.getElementsByClassName('capa');

  // Add event listener for mouseover to each image
  for (var i = 0; i < images.length; i++) {
    images[i].addEventListener('mouseover', function() {
      // Increase the size of the image
      this.style.width = '22em'; // Or whatever size it originally was
      this.style.height = '28em';
      console.log("mouse em cima");
    });

    // Add event listener for mouseout to each image
    images[i].addEventListener('mouseout', function() {
      // Revert back to original size
      this.style.width = '19em'; // Or whatever size it originally was
      this.style.height = '25em';
      console.log("mouse fora");
      console.log("sai do console sua puta");
    });
  }

