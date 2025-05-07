//// File that inserts data into the database

const {NewSchema} = require("../models/model1");


// Data holders (Person)
const names = ["Gabriel", "Gustavo", "Esdras", "John", "Edson", "Jaris", "Isis", "Michael", "Avril", "James", "Samuel", "Mary", "Lena", "Sophia", "Benjamin", "Lucas", "Emma", "Oliver", "Charlotte", "Daniel", "Ethan"];
const last_names = ["Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor", "Anderson", "Thomas", "White", "Harris", "Clark", "Lewis", "Walker", "Hall", "Allen", "Young"];
const categories = ["Electronics", "Clothes", "Food", "Tools", "Furniture", "Sports", "Books", "Beauty"];

const elec_products = ["Laptop", "Phone", "Tablet", "Monitor", "Headphones", "Mouse", "Keyboard", "Printer", "Camera", "Speaker", "Smartwatch", "Drone", "Gaming Console", "VR Headset", "External Hard Drive"];
const clot_products = ["Shirt", "Pants", "Shoes", "Jacket", "Hat", "Socks", "Belt", "Scarf", "Gloves", "Sweater", "Dress", "Jeans", "Shorts", "Sandals", "T-shirt"];
const food_products = ["Pizza", "Burger", "Pasta", "Salad", "Sushi", "Ice Cream", "Cake", "Cookies", "Chips", "Candy", "Steak", "Tacos", "Rice", "Smoothie", "Sandwich"];
const tool_products = ["Hammer", "Screwdriver", "Wrench", "Drill", "Saw", "Pliers", "Tape Measure", "Level", "Chisel", "Axe", "Utility Knife", "Flashlight", "Crowbar", "Socket Set", "Multimeter"];
const furn_products = ["Sofa", "Dining Table", "Chair", "Bed", "Bookshelf", "Wardrobe", "Coffee Table", "Desk", "TV Stand", "Drawer"];
const sport_products = ["Football", "Basketball", "Tennis Racket", "Running Shoes", "Yoga Mat", "Dumbbells", "Jump Rope", "Cycling Helmet", "Boxing Gloves", "Water Bottle"];
const book_products = ["Novel", "Biography", "Science Book", "History Book", "Cookbook", "Self-Help Book", "Fantasy Book", "Mystery Book", "Thriller", "Comic"];
const beauty_products = ["Lipstick", "Foundation", "Mascara", "Shampoo", "Conditioner", "Body Lotion", "Face Cream", "Perfume", "Nail Polish", "Hair Dryer"];



// Function that creates a random person on each loop.
async function DataCreator(p_amount) {
    try {
        const amount = parseInt(p_amount);  // Reading the "amount" parameter. 
        const createdTotalData = [];  // Array that will hold the created people.
        
        async function SetElements(plist, p_price){
            let product = plist[Math.floor(Math.random() * plist.length)];
            let price = Math.floor(Math.random() * p_price);
            return {product, price};
        }

        for (let i = 0; i < amount; i++){
            // Randomly created person.
            c_name = names[Math.floor(Math.random() * names.length)];
            c_last_name = last_names[Math.floor(Math.random() * last_names.length)];
            c_email = c_name + "@gmail.com";
            c_product = "";
            c_price = 0;
            c_category = categories[Math.floor(Math.random() * categories.length)];
            c_amount = Math.floor(Math.random() * 200);

            switch (c_category) {
                case "Electronics":
                    elec_data = await SetElements(elec_products, 50000);
                    c_product = elec_data.product;
                    c_price = elec_data.price;
                    break;
            
                case "Clothes":
                    clot_data = await SetElements(clot_products, 2000);
                    c_product = clot_data.product;
                    c_price = clot_data.price;
                    break;
            
                case "Food":
                    food_data = await SetElements(food_products, 200);
                    c_product = food_data.product;
                    c_price = food_data.price;
                    break;
            
                case "Tools":
                    tool_data = await SetElements(tool_products, 500);
                    c_product = tool_data.product;
                    c_price = tool_data.price;
                    break;
            
                case "Furniture":
                    furn_data = await SetElements(furn_products, 15000);
                    c_product = furn_data.product;
                    c_price = furn_data.price;
                    break;
            
                case "Sports":
                    sport_data = await SetElements(sport_products, 3000);
                    c_product = sport_data.product;
                    c_price = sport_data.price;
                    break;
            
                case "Books":
                    book_data = await SetElements(book_products, 500);
                    c_product = book_data.product;
                    c_price = book_data.price;
                    break;
            
                case "Beauty":
                    beauty_data = await SetElements(beauty_products, 2500);
                    c_product = beauty_data.product;
                    c_price = beauty_data.price;
                    break;
            }

            c_total = c_price * c_amount;  // Total price of the product.
            

            const createdData = {
                client: {
                    name: c_name,
                    lastname: c_last_name,
                    email: c_email,
                },
                product: c_product,
                category: c_category,
                amount: c_amount,
                unit_price: c_price,
                total: c_total
            }

            createdTotalData.push(createdData);  // Adds the person to the array.
        }

        await NewSchema.insertMany(createdTotalData, {ordered: false});  // Adds the array of people.

        console.log(`Created ${amount} products.`);  // Shows the amount of created people.
        

    } catch (error) {
        console.log("An error occurred, failed to create the documents  (。>︿<)_θ", error.toString());  // Shows the error if it occurs.
    }
}

//module.exports = DataCreator;  // Exports the function.
module.exports.DataCreator = DataCreator;  // Exports the function.

