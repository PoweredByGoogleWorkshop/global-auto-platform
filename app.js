// Simple search logic for your recipes
const recipes = [
    { if: "WhatsApp", then: "Google Sheets", lang: "en" },
    { if: "Shopify", then: "Telegram", lang: "en" }
];

function findAutomation(query) {
    return recipes.filter(r => 
        r.if.toLowerCase().includes(query.toLowerCase()) || 
        r.then.toLowerCase().includes(query.toLowerCase())
    );
}

console.log("GlobalAuto Engine Initialized 100%");
