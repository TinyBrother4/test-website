// --- Vintage Story Website JS ---
// Log to console to confirm the site is loaded
console.log("Vintage Story Website loaded! ✅");

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {

  // Example: handle Discord link click
  const discordLink = document.querySelector('a[href*="discord.gg"]');
  if (discordLink) {
    discordLink.addEventListener("click", () => {
      console.log("Discord link clicked! Redirecting...");
    });
  }

  // Placeholder for future feature: dynamic mod list
  const modsSection = document.querySelector("section:nth-of-type(1)");
  if (modsSection) {
    // Example: dynamically add a mod item
    const modItem = document.createElement("p");
    modItem.textContent = "Mod Example: Vintage Enhancer v1.0";
    modsSection.appendChild(modItem);
  }

  // Placeholder for future feature: help/data tips
  const helpSection = document.querySelector("section:nth-of-type(2)");
  if (helpSection) {
    const tip = document.createElement("p");
    tip.textContent = "Tip: Always back up your save files before installing mods!";
    helpSection.appendChild(tip);
  }

});
