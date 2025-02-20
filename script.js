// Sample provider data
const providers = [
  { name: "SolarTech Solutions", service: "Solar Panel Installation", cost: "$5,000 - $10,000" },
  { name: "RainHarvest Pros", service: "Rainwater Collection Systems", cost: "$2,000 - $5,000" },
  { name: "WindEnergy Experts", service: "Windmill Installation", cost: "$15,000 - $25,000" }
];

// Function to display providers
function displayProviders() {
  const providerList = document.getElementById("providerList");
  providerList.innerHTML = providers.map(provider => `
    <div class="provider">
      <h3>${provider.name}</h3>
      <p><strong>Service:</strong> ${provider.service}</p>
      <p><strong>Cost:</strong> ${provider.cost}</p>
    </div>
  `).join("");
}

// Login form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  alert(`Welcome, ${username}!`);
});

// Display providers on page load
displayProviders();
