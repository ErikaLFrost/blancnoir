//Kod för att ändra meny-länkarnas display från none till block när användaren trycker på hamburge-menyn
    function myFunction() {
      var x = document.getElementById("myLinks");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    }