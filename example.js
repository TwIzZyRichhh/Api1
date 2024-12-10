// Define your SerpAPI key and query
const apiKey = "f0a0c00723497a92e619abf61b4ff01748795261f30982390113af56fed5ff8c"; // Replace with your actual SerpAPI key
const query = "beautiful landscapes"; // Customize your search query
const apiUrl = `https://serpapi.com/search?q=${encodeURIComponent(query)}&tbm=isch&api_key=${apiKey}`; // Updated URL using SerpAPI proxy

// Fetch data from SerpAPI
fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const images = data.images_results.slice(0, 2); // Get only the first two images

    // Display the first image
    const image1 = document.getElementById("image1");
    image1.querySelector("img").src = images[0].original; // Image URL
    image1.querySelector(".caption").textContent = images[0].title || "Image 1"; // Caption

    // Display the second image
    const image2 = document.getElementById("image2");
    image2.querySelector("img").src = images[1].original; // Image URL
    image2.querySelector(".caption").textContent = images[1].title || "Image 2"; // Caption
  })
  .catch((error) => {
    console.error("Error fetching images:", error);
    document.body.innerHTML = "<p>Failed to load images. Please try again later.</p>";
  });
