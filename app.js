const products = [
    // Fruits
    "Apple", "Banana", "Carrot", "Date", "Eggplant", "Fig", "Grapes", "Honeydew", "Indian Fig", "Jackfruit", 
    "Kiwi", "Lemon", "Mango", "Nectarine", "Orange", "Papaya", "Quince", "Raspberry", "Strawberry", "Tomato", 
    "Ugli Fruit", "Vanilla Bean", "Watermelon", "Xigua", "Yellow Passionfruit", "Zucchini",

    // Vegetables
    "Asparagus", "Beetroot", "Broccoli", "Cabbage", "Capsicum", "Cauliflower", "Celery", "Cucumber", "Garlic", 
    "Green Beans", "Kale", "Lettuce", "Mushrooms", "Okra", "Onion", "Peas", "Pumpkin", "Radish", "Sweet Potato", "Turnip",

    // Dairy
    "Butter", "Cheese", "Cottage Cheese", "Cream", "Curd", "Dairy Milk", "Eggs", "Ghee", "Milk", "Sour Cream", 
    "Whipped Cream", "Yogurt", "Mozzarella", "Cheddar", "Paneer", "Parmesan", "Feta", "Goat Cheese", "Ricotta", "Swiss Cheese",

    // Meat & Seafood
    "Beef", "Chicken", "Duck", "Goat Meat", "Lamb", "Pork", "Turkey", "Salmon", "Tuna", "Prawns", 
    "Crab", "Lobster", "Shrimp", "Octopus", "Squid", "Mutton", "Sausage", "Ham", "Bacon", "Fish Fillet",

    // Grains & Pulses
    "Rice", "Quinoa", "Wheat", "Barley", "Oats", "Cornmeal", "Millet", "Buckwheat", "Lentils", "Chickpeas", 
    "Black Beans", "Kidney Beans", "Soybeans", "Peanuts", "Green Gram", "Brown Lentils", "White Rice", "Basmati Rice", "Jasmine Rice", "Pasta",

    // Spices & Herbs
    "Basil", "Bay Leaf", "Black Pepper", "Cardamom", "Cinnamon", "Cloves", "Coriander", "Cumin", "Dill", "Fennel",
    "Fenugreek", "Garlic Powder", "Ginger", "Mustard Seeds", "Nutmeg", "Oregano", "Paprika", "Parsley", "Rosemary", "Saffron",
    "Sage", "Thyme", "Turmeric", "Vanilla Extract", "White Pepper",

    // Snacks & Bakery
    "Bread", "Bagel", "Biscuit", "Brownie", "Cake", "Chocolate", "Cookies", "Croissant", "Cupcake", "Doughnut",
    "Muffins", "Pastry", "Pie", "Pretzel", "Tart", "Waffles", "Crackers", "Granola Bar", "Popcorn", "Chips",

    // Beverages
    "Coffee", "Tea", "Green Tea", "Black Tea", "Lemonade", "Soda", "Energy Drink", "Fruit Juice", "Coconut Water", "Milkshake",
    "Smoothie", "Cola", "Iced Tea", "Tonic Water", "Sparkling Water", "Hot Chocolate", "Buttermilk", "Mango Juice", "Apple Juice", "Pineapple Juice",

    // Frozen & Ready-to-Eat
    "Frozen Pizza", "Frozen Vegetables", "Frozen Fries", "Chicken Nuggets", "Fish Sticks", "Frozen Berries", "Ice Cream", "Frozen Yogurt", "Pasta Sauce", "Frozen Meatballs",

    // Condiments & Sauces
    "Ketchup", "Mayonnaise", "Mustard", "Soy Sauce", "Hot Sauce", "Barbecue Sauce", "Hummus", "Pesto", "Salsa", "Pickles",
    "Salad Dressing", "Tahini", "Coconut Milk", "Olive Oil", "Vinegar", "Peanut Butter", "Jam", "Honey", "Chutney", "Relish",

    // Miscellaneous
    "Salt", "Sugar", "Flour", "Baking Soda", "Baking Powder", "Yeast", "Cornstarch", "Gelatin", "Custard Powder", "Maple Syrup",

    // Dried Fruits
    "Apricots", "Banana Chips", "Cranberries", "Raisins", "Goji Berries", "Prunes", "Dates", "Figs", "Mango Slices", "Apple Slices",
    "Papaya", "Pineapple Rings", "Coconut Chips", "Cherries", "Blueberries", "Strawberries", "Peach Slices", "Pear Slices", "Pineapple", "Tamarind",

    // Nuts & Seeds
    "Almonds", "Cashews", "Walnuts", "Pistachios", "Pecans", "Hazelnuts", "Macadamia Nuts", "Brazil Nuts", "Pumpkin Seeds", "Sunflower Seeds",
    "Chia Seeds", "Flaxseeds", "Sesame Seeds", "Hemp Seeds", "Poppy Seeds", "Pine Nuts", "Peanuts", "Coconut Flakes", "Sliced Almonds", "Toasted Pumpkin Seeds",

    // Canned Goods
    "Canned Tomatoes", "Canned Tuna", "Canned Beans", "Canned Sweetcorn", "Canned Pineapple", "Canned Peas", "Canned Mushrooms", "Canned Fish", "Canned Sardines", "Canned Coconut Milk",
    "Canned Soup", "Canned Corned Beef", "Canned Chopped Tomatoes", "Canned Fruits", "Canned Green Beans", "Canned Carrots", "Canned Chili", "Canned Lentils", "Canned Broth", "Canned Meat",

    // Packaged Foods
    "Cereal", "Granola", "Instant Oatmeal", "Breakfast Bars", "Rice Cakes", "Pasta", "Mac and Cheese", "Ramen Noodles", "Instant Rice", "Soup Mix",
    "Instant Potatoes", "Cup Noodles", "Granola Bars", "Packaged Salad Mix", "Croutons", "Pizza Crust", "Flour Tortillas", "Bread Crumbs", "Pita Bread", "Couscous",

    // Sweeteners
    "Honey", "Maple Syrup", "Agave Syrup", "Stevia", "Molasses", "Brown Sugar", "Powdered Sugar", "Coconut Sugar", "Corn Syrup", "Golden Syrup",
    "Date Sugar", "Monk Fruit Sweetener", "Syrup", "Artificial Sweeteners", "Erythritol", "Xylitol", "Sucrose", "Fructose", "Maple Sugar", "Coconut Blossom Sugar",

    // Baking Supplies
    "Vanilla Extract", "Cocoa Powder", "Chocolate Chips", "Baking Chocolate", "Confectioner's Sugar", "Brown Sugar", "Baking Powder", "Baking Soda", "Cornstarch", "Cream of Tartar",
    "Sweetened Condensed Milk", "Evaporated Milk", "Almond Flour", "Coconut Flour", "Bread Flour", "All-Purpose Flour", "Self-Rising Flour", "Rice Flour", "Arrowroot Powder", "Puff Pastry",

    // International Foods
    "Sushi Rice", "Nori Sheets", "Miso Paste", "Soy Sauce", "Teriyaki Sauce", "Wasabi", "Chili Paste", "Thai Curry Paste", "Tofu", "Kimchi",
    "Tempura Batter", "Rice Vinegar", "Mirin", "Kombu", "Dashi", "Edamame", "Mung Beans", "Panko Breadcrumbs", "Rice Paper", "Soba Noodles",

    // Beverages (Continued)
    "Iced Coffee", "Chai Tea", "Coconut Milk", "Ginger Ale", "Kombucha", "Lemon Iced Tea", "Fruit Punch", "Almond Milk", "Soy Milk", "Rice Milk",
    "Green Smoothie", "Herbal Tea", "Ginger Tea", "Chilled Water", "Coconut Water", "Mint Tea", "Hot Coffee", "Energy Shots", "Vegetable Juice", "Berry Smoothie",

    // Baby & Infant
    "Baby Formula", "Baby Food Jars", "Baby Snacks", "Baby Rice Cereal", "Diapers", "Baby Wipes", "Baby Bottles", "Baby Shampoo", "Baby Lotion", "Baby Powder",
    "Teething Biscuits", "Baby Porridge", "Baby Juice", "Breast Pads", "Baby Oil", "Baby Moisturizer", "Baby Bath Gel", "Baby Soap", "Infant Multivitamins", "Baby Diaper Rash Cream"
];


const searchBar = document.getElementById("search-bar");
const suggestionsBox = document.getElementById("suggestions");

// Function to display suggestions
searchBar.addEventListener("input", function () {
    let input = searchBar.value.toLowerCase();
    suggestionsBox.innerHTML = "";

    if (input.length === 0) return;

    let filteredProducts = products.filter(product =>
        product.toLowerCase().includes(input)
    );

    filteredProducts.forEach(product => {
        let suggestionItem = document.createElement("div");
        suggestionItem.textContent = product;
        suggestionItem.onclick = function () {
            searchBar.value = product;
            window.location.href = "error.html?query=" + encodeURIComponent(product);
        };
        suggestionsBox.appendChild(suggestionItem);
    });
});

// Function to handle search button click
function searchProduct() {
    let query = searchBar.value.trim();
    if (query) {
        window.location.href = "error.html?query=" + encodeURIComponent(query);
    }
}