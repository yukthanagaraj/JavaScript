document.getElementById("cropForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let soil = document.getElementById("soil").value;
  let season = document.getElementById("season").value;

  let result = "";

  // Simple logic (you can improve later)
  if (soil === "loamy" && season === "rainy") {
    result = "🌾 Rice, 🌽 Maize";
  } 
  else if (soil === "clayey" && season === "winter") {
    result = "🌿 Wheat, 🌱 Mustard";
  } 
  else if (soil === "sandy" && season === "summer") {
    result = "🍉 Watermelon, 🥒 Cucumber";
  } 
  else {
    result = "🌱 Try crops like Millet or Pulses";
  }

  document.getElementById("result").innerHTML =
    "<h3>Recommended Crops:</h3><p>" + result + "</p>";
});