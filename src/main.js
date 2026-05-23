import "./styles.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { SiInstagram, SiSwiggy, SiZomato } from "react-icons/si";

const links = {
  whatsapp:
    "https://wa.me/919874858954?text=Hi%20Dunes%20Cafe%2C%20I%20want%20to%20book%20a%20table%20today.",
  enquiry:
    "https://wa.me/919874858954?text=Hi%20Dunes%20Cafe%2C%20I%20want%20to%20enquire%20about%20booking%2C%20music%20night%20updates%20and%20any%20current%20offers.",
  call: "tel:+919874858954",
  directions:
    "https://www.google.com/maps/search/?api=1&query=Dunes%20Cafe%20Patuli%20Kolkata",
};

const highlights = [
  ["Hookah Lounge", "Low-lit sessions, warm tables and a relaxed Patuli crowd."],
  ["Live Music", "Weekend-ready evenings with stage glow and group energy."],
  ["Cafe Plates", "Continental, Chinese, Italian and comfort food placeholders."],
  ["Mocktails", "Bright, shareable drinks for birthdays and night-out plans."],
  ["Group Hangouts", "Tables designed for friends, photos and long conversations."],
];

const menuCategories = [
  "Quick Bites",
  "Munchies",
  "Pasta/Soup",
  "Chinese",
  "Tandoor",
  "Main Course",
  "Desserts",
];

const menuItems = [
  { category: "Quick Bites", section: "Continental", group: "Veg", name: "Dry Rub Fries", price: "₹225", tag: "Veg" },
  { category: "Quick Bites", section: "Continental", group: "Veg", name: "French Fry & Three Dips", price: "₹249", tag: "Veg" },
  { category: "Quick Bites", section: "Continental", group: "Veg", name: "French Fries with melted cheese", price: "₹249", tag: "Veg" },
  { category: "Quick Bites", section: "Continental", group: "Veg", name: "Exotic saute Veggies", price: "₹275", tag: "Veg" },
  { category: "Quick Bites", section: "Continental", group: "Veg", name: "Papad Cone Chat", price: "₹299", tag: "Veg" },
  { category: "Quick Bites", section: "Continental", group: "Veg", name: "Dunes Potato Spares", price: "₹349", tag: "Veg" },
  { category: "Quick Bites", section: "Continental", group: "Veg", name: "Mushroom Shashlik", price: "₹349", tag: "Veg" },
  { category: "Quick Bites", section: "Continental", group: "Veg", name: "Jalapeno Cheesy Bites", price: "₹399", tag: "Veg" },
  { category: "Quick Bites", section: "Continental", group: "Chicken", name: "Crispy Chicken Chips", price: "₹349", tag: "Non-Veg" },
  { category: "Quick Bites", section: "Continental", group: "Chicken", name: "Nasty French Fries", price: "₹375", tag: "Non-Veg" },
  { category: "Quick Bites", section: "Continental", group: "Chicken", name: "Chicken & Cheese Poppers", price: "₹399", tag: "Non-Veg" },
  { category: "Quick Bites", section: "Continental", group: "Chicken", name: "Lemon Chicken Lollipop", price: "₹449", tag: "Non-Veg" },
  { category: "Quick Bites", section: "Continental", group: "Chicken", name: "Barbecue Chicken Wings", price: "₹425", tag: "Non-Veg" },
  { category: "Quick Bites", section: "Continental", group: "Chicken", name: "Peri-peri Chicken Popcorn", price: "₹425", tag: "Non-Veg" },
  { category: "Quick Bites", section: "Continental", group: "Fish and Prawn", name: "Fish & Chips", price: "₹549", tag: "Fish" },
  { category: "Quick Bites", section: "Continental", group: "Fish and Prawn", name: "Fish Batter Fry with dip", price: "₹625", tag: "Fish" },
  { category: "Quick Bites", section: "Continental", group: "Fish and Prawn", name: "Peri-peri Fish Finger", price: "₹549", tag: "Fish" },
  { category: "Quick Bites", section: "Continental", group: "Fish and Prawn", name: "Prawn Batter Fry", price: "₹499", tag: "Fish" },
  { category: "Quick Bites", section: "Continental", group: "Fish and Prawn", name: "Prawn Butter Garlic", price: "₹499", tag: "Fish" },
  { category: "Quick Bites", section: "Continental", group: "Fish and Prawn", name: "Prawn Cocktail", price: "₹549", tag: "Fish" },

  { category: "Munchies", section: "Sandwiches", group: "Veg", name: "Corn and pea sandwich", price: "₹249", tag: "Veg" },
  { category: "Munchies", section: "Sandwiches", group: "Veg", name: "Three cheese sandwich", price: "₹249", tag: "Veg" },
  { category: "Munchies", section: "Sandwiches", group: "Veg", name: "Exotic veg sandwich", price: "₹249", tag: "Veg" },
  { category: "Munchies", section: "Sandwiches", group: "Non-Veg", name: "Grilled chicken sandwich", price: "₹299", tag: "Non-Veg" },
  { category: "Munchies", section: "Sandwiches", group: "Non-Veg", name: "Chicken honey mustard sandwich", price: "₹299", tag: "Non-Veg" },
  { category: "Munchies", section: "Sandwiches", group: "Non-Veg", name: "Killer Club Sandwich", price: "₹349", tag: "Non-Veg" },
  { category: "Munchies", section: "Sandwiches", group: "Non-Veg", name: "Grilled Fish sandwich", price: "₹425", tag: "Fish" },
  { category: "Munchies", section: "Pizza", group: "Veg", name: "Eden of garden", price: "₹349", tag: "Veg" },
  { category: "Munchies", section: "Pizza", group: "Veg", name: "Exotic margherita", price: "₹349", tag: "Veg" },
  { category: "Munchies", section: "Pizza", group: "Veg", name: "Pizza Al fungi", price: "₹349", tag: "Veg" },
  { category: "Munchies", section: "Pizza", group: "Veg", name: "Cottage cheese pizza", price: "₹399", tag: "Veg" },
  { category: "Munchies", section: "Pizza", group: "Non-Veg", name: "Jalapeno Chicken Tikka Pizza", price: "₹475", tag: "Non-Veg" },
  { category: "Munchies", section: "Pizza", group: "Non-Veg", name: "Barbecue Chicken Pizza", price: "₹475", tag: "Non-Veg" },
  { category: "Munchies", section: "Pizza", group: "Non-Veg", name: "Peri-peri Chicken Pizza", price: "₹475", tag: "Non-Veg" },
  { category: "Munchies", section: "Pizza", group: "Non-Veg", name: "Wasabi Rub Chicken Pizza", price: "₹499", tag: "Non-Veg" },
  { category: "Munchies", section: "Pizza", group: "Non-Veg", name: "Dunes Cafe Special Pizza", price: "₹699", tag: "Non-Veg" },
  { category: "Munchies", section: "Salads", name: "Caeser Salad", tag: "Mix", variants: [{ label: "Veg", price: "₹249" }, { label: "Non-Veg", price: "₹299" }] },
  { category: "Munchies", section: "Salads", name: "Cheese Salad", tag: "Mix", variants: [{ label: "Veg", price: "₹299" }, { label: "Non-Veg", price: "₹349" }] },

  { category: "Pasta/Soup", section: "Pasta", name: "White Sauce Pasta", tag: "Mix", note: "Choice of your sauce", variants: [{ label: "Veg", price: "₹375" }, { label: "Non-Veg", price: "₹425" }] },
  { category: "Pasta/Soup", section: "Pasta", name: "Red Sauce Pasta", tag: "Mix", note: "Choice of your sauce", variants: [{ label: "Veg", price: "₹375" }, { label: "Non-Veg", price: "₹425" }] },
  { category: "Pasta/Soup", section: "Pasta", name: "Mix Sauce Pasta", tag: "Mix", note: "Choice of your sauce", variants: [{ label: "Veg", price: "₹375" }, { label: "Non-Veg", price: "₹425" }] },
  { category: "Pasta/Soup", section: "Pasta", name: "Pesto Pasta", tag: "Mix", note: "Choice of your sauce", variants: [{ label: "Veg", price: "₹399" }, { label: "Non-Veg", price: "₹449" }] },
  { category: "Pasta/Soup", section: "Pasta", name: "Aglio-E-Olio Spaghetti Pasta", tag: "Mix", note: "Choice of your sauce", variants: [{ label: "Veg", price: "₹399" }, { label: "Non-Veg", price: "₹449" }] },
  { category: "Pasta/Soup", section: "Pasta", name: "Wasabi White Sauce Pasta", tag: "Mix", note: "Choice of your sauce", variants: [{ label: "Veg", price: "₹425" }, { label: "Non-Veg", price: "₹499" }] },
  { category: "Pasta/Soup", section: "Pasta", name: "Dunes Cafe Special Pasta", tag: "Mix", note: "Choice of your sauce", variants: [{ label: "Veg", price: "₹449" }, { label: "Non-Veg", price: "₹549" }] },
  { category: "Pasta/Soup", section: "Omelette with Garlic Bread", name: "Spinach and Chicken baked omelette", price: "₹225", tag: "Non-Veg" },
  { category: "Pasta/Soup", section: "Omelette with Garlic Bread", name: "Fluffy omelette", price: "₹249", tag: "Non-Veg" },
  { category: "Pasta/Soup", section: "Omelette with Garlic Bread", name: "Tomato and basil omelette", price: "₹249", tag: "Non-Veg" },
  { category: "Pasta/Soup", section: "Omelette with Garlic Bread", name: "Masala Omelette", price: "₹249", tag: "Non-Veg" },
  { category: "Pasta/Soup", section: "Hot Bowl / Soup", name: "Thick Clear soup", tag: "Mix", variants: [{ label: "Veg", price: "₹149" }, { label: "Non-Veg", price: "₹199" }, { label: "Mix", price: "₹249" }] },
  { category: "Pasta/Soup", section: "Hot Bowl / Soup", name: "Hot & Sour soup", tag: "Mix", variants: [{ label: "Veg", price: "₹175" }, { label: "Non-Veg", price: "₹199" }, { label: "Mix", price: "₹249" }] },
  { category: "Pasta/Soup", section: "Hot Bowl / Soup", name: "Manchow soup", tag: "Mix", variants: [{ label: "Veg", price: "₹175" }, { label: "Non-Veg", price: "₹199" }, { label: "Mix", price: "₹249" }] },
  { category: "Pasta/Soup", section: "Hot Bowl / Soup", name: "Sweet Corn Soup", tag: "Mix", variants: [{ label: "Veg", price: "₹175" }, { label: "Non-Veg", price: "₹199" }, { label: "Mix", price: "₹249" }] },
  { category: "Pasta/Soup", section: "Hot Bowl / Soup", name: "Tomato Thai Basil soup", tag: "Mix", variants: [{ label: "Veg", price: "₹175" }, { label: "Non-Veg", price: "₹199" }, { label: "Mix", price: "₹249" }] },
  { category: "Pasta/Soup", section: "Hot Bowl / Soup", name: "Thick Lemon Coriander Soup", tag: "Mix", variants: [{ label: "Veg", price: "₹175" }, { label: "Non-Veg", price: "₹199" }, { label: "Mix", price: "₹249" }] },
  { category: "Pasta/Soup", section: "Special Platter", name: "Veg Voyage Platter", price: "₹649", tag: "Veg" },
  { category: "Pasta/Soup", section: "Special Platter", name: "The Butcher’s Bot Platter", price: "₹799", tag: "Non-Veg" },

  { category: "Chinese", section: "Chinese Starters", group: "Veg", name: "American Corn Papper Salt", price: "₹275", tag: "Veg" },
  { category: "Chinese", section: "Chinese Starters", group: "Veg", name: "Crispy Chilli Babycorn", price: "₹275", tag: "Veg" },
  { category: "Chinese", section: "Chinese Starters", group: "Veg", name: "Corn Manchurian Balls dry", price: "₹275", tag: "Veg" },
  { category: "Chinese", section: "Chinese Starters", group: "Veg", name: "Nutty Chilli Potato", price: "₹299", tag: "Veg" },
  { category: "Chinese", section: "Chinese Starters", group: "Veg", name: "Honey Chilli Potato", price: "₹299", tag: "Veg" },
  { category: "Chinese", section: "Chinese Starters", group: "Veg", name: "Crispy Honey Paneer", price: "₹299", tag: "Veg" },
  { category: "Chinese", section: "Chinese Starters", group: "Veg", name: "Crispy Chilli Mushroom dry", price: "₹289", tag: "Veg" },
  { category: "Chinese", section: "Chinese Starters", group: "Veg", name: "Bang-Bang Chilli Broccoli with Mushroom", price: "₹349", tag: "Veg" },
  { category: "Chinese", section: "Chinese Starters", group: "Chicken", name: "Dynamite Chilli Chicken dry", price: "₹349", tag: "Non-Veg" },
  { category: "Chinese", section: "Chinese Starters", group: "Chicken", name: "Fried Chicken Lollipop", price: "₹349", tag: "Non-Veg" },
  { category: "Chinese", section: "Chinese Starters", group: "Chicken", name: "Pepper Garlic Chicken", price: "₹349", tag: "Non-Veg" },
  { category: "Chinese", section: "Chinese Starters", group: "Chicken", name: "Crispy Honey Chicken", price: "₹349", tag: "Non-Veg" },
  { category: "Chinese", section: "Chinese Starters", group: "Chicken", name: "Drums Of Heaven", price: "₹399", tag: "Non-Veg" },
  { category: "Chinese", section: "Chinese Starters", group: "Chicken", name: "Dragon Chicken Wings", price: "₹399", tag: "Non-Veg" },
  { category: "Chinese", section: "Chinese Starters", group: "Fish and Prawn", name: "Dynamite Chilli Fish Dry", price: "₹449", tag: "Fish" },
  { category: "Chinese", section: "Chinese Starters", group: "Fish and Prawn", name: "Fish Pepper Salt", price: "₹449", tag: "Fish" },
  { category: "Chinese", section: "Chinese Starters", group: "Fish and Prawn", name: "Wasabi Fish Dry", price: "₹475", tag: "Fish" },
  { category: "Chinese", section: "Chinese Starters", group: "Fish and Prawn", name: "Golden Fried Prawn", price: "₹499", tag: "Fish" },
  { category: "Chinese", section: "Chinese Starters", group: "Fish and Prawn", name: "Kolkata Style Chilli Prawn", price: "₹475", tag: "Fish" },
  { category: "Chinese", section: "Chinese Side Dishes", group: "Veg", name: "White Manchurian Gravy", price: "₹249", tag: "Veg" },
  { category: "Chinese", section: "Chinese Side Dishes", group: "Veg", name: "Chilli Oyster Paneer", price: "₹299", tag: "Veg" },
  { category: "Chinese", section: "Chinese Side Dishes", group: "Veg", name: "Paneer in Hot/Sweet Garlic Sauce", price: "₹299", tag: "Veg" },
  { category: "Chinese", section: "Chinese Side Dishes", group: "Veg", name: "Chilli Mushroom Broccoli", price: "₹299", tag: "Veg" },
  { category: "Chinese", section: "Chinese Side Dishes", group: "Chicken", name: "Chilli Chicken", price: "₹349", tag: "Non-Veg" },
  { category: "Chinese", section: "Chinese Side Dishes", group: "Chicken", name: "Hot Garlic Chicken", price: "₹349", tag: "Non-Veg" },
  { category: "Chinese", section: "Chinese Side Dishes", group: "Chicken", name: "Schezwan Chicken", price: "₹349", tag: "Non-Veg" },
  { category: "Chinese", section: "Chinese Side Dishes", group: "Chicken", name: "Kung Pao Chicken", price: "₹375", tag: "Non-Veg" },
  { category: "Chinese", section: "Chinese Side Dishes", group: "Chicken", name: "Sweet & Sour Chicken", price: "₹375", tag: "Non-Veg" },
  { category: "Chinese", section: "Chinese Side Dishes", group: "Fish and Prawn", name: "Oyster Chilli Fish", price: "₹425", tag: "Fish" },
  { category: "Chinese", section: "Chinese Side Dishes", group: "Fish and Prawn", name: "Hot Garlic Fish", price: "₹425", tag: "Fish" },
  { category: "Chinese", section: "Chinese Side Dishes", group: "Fish and Prawn", name: "Lemon Fish", price: "₹425", tag: "Fish" },
  { category: "Chinese", section: "Chinese Side Dishes", group: "Fish and Prawn", name: "Pepper Chilli Prawn", price: "₹449", tag: "Fish" },
  { category: "Chinese", section: "Chinese Side Dishes", group: "Fish and Prawn", name: "Kung Pao Prawn", price: "₹449", tag: "Fish" },
  { category: "Chinese", section: "Chinese Side Dishes", group: "Fish and Prawn", name: "Cantonese Prawn", price: "₹475", tag: "Fish" },
  { category: "Chinese", section: "Chinese Side Dishes", group: "Fish and Prawn", name: "Sesame Oyster Prawn", price: "₹475", tag: "Fish" },

  { category: "Tandoor", section: "Tandoor", group: "Veg", name: "Paneer Tikka Kebab", price: "₹349", tag: "Veg" },
  { category: "Tandoor", section: "Tandoor", group: "Veg", name: "Achari Tikka Paneer", price: "₹349", tag: "Veg" },
  { category: "Tandoor", section: "Tandoor", group: "Veg", name: "Paneer Malai Tikka", price: "₹349", tag: "Veg" },
  { category: "Tandoor", section: "Tandoor", group: "Veg", name: "Tandoori Pineapple Chat", price: "₹349", tag: "Veg" },
  { category: "Tandoor", section: "Tandoor", group: "Veg", name: "Tandoori Mushroom Broccoli", price: "₹375", tag: "Veg" },
  { category: "Tandoor", section: "Tandoor", group: "Veg", name: "Mushroom Mozzarella Bites", price: "₹375", tag: "Veg" },
  { category: "Tandoor", section: "Tandoor", group: "Chicken", name: "Chicken Malai Reshmi Kebab", price: "₹399", tag: "Non-Veg" },
  { category: "Tandoor", section: "Tandoor", group: "Chicken", name: "Chicken Afghani Kebab", price: "₹399", tag: "Non-Veg" },
  { category: "Tandoor", section: "Tandoor", group: "Chicken", name: "Chicken Hariali Kebab", price: "₹399", tag: "Non-Veg" },
  { category: "Tandoor", section: "Tandoor", group: "Chicken", name: "Tandoori Chicken", tag: "Non-Veg", variants: [{ label: "Half", price: "₹425" }, { label: "Full", price: "₹849" }] },
  { category: "Tandoor", section: "Tandoor", group: "Fish", name: "Fish Achari Tikka Kebab", price: "₹449", tag: "Fish" },
  { category: "Tandoor", section: "Tandoor", group: "Fish", name: "Fish Anarkali Kebab", price: "₹449", tag: "Fish" },
  { category: "Tandoor", section: "Tandoor", group: "Fish", name: "Pomfret Tandoori", price: "", tag: "Fish", note: "Check price" },

  { category: "Main Course", section: "Chinese", group: "Fried Rice", name: "Kolkata Style Fried Rice", tag: "Mix", variants: [{ label: "Veg", price: "₹249" }, { label: "Non-Veg", price: "₹299" }, { label: "Mix", price: "₹349" }] },
  { category: "Main Course", section: "Chinese", group: "Fried Rice", name: "Schezwan Fried Rice", tag: "Mix", variants: [{ label: "Veg", price: "₹249" }, { label: "Non-Veg", price: "₹299" }, { label: "Mix", price: "₹349" }] },
  { category: "Main Course", section: "Chinese", group: "Fried Rice", name: "Burnt Garlic Fried Rice", tag: "Mix", variants: [{ label: "Veg", price: "₹249" }, { label: "Non-Veg", price: "₹299" }, { label: "Mix", price: "₹349" }] },
  { category: "Main Course", section: "Chinese", group: "Fried Rice", name: "Shanghai Fried Rice", tag: "Mix", variants: [{ label: "Veg", price: "₹249" }, { label: "Non-Veg", price: "₹299" }, { label: "Mix", price: "₹349" }] },
  { category: "Main Course", section: "Chinese", group: "Noodles", name: "Hakka Noodle", tag: "Mix", variants: [{ label: "Veg", price: "₹249" }, { label: "Non-Veg", price: "₹299" }, { label: "Mix", price: "₹349" }] },
  { category: "Main Course", section: "Chinese", group: "Noodles", name: "Gravy Cantonese Noodle", tag: "Mix", variants: [{ label: "Veg", price: "₹249" }, { label: "Non-Veg", price: "₹299" }, { label: "Mix", price: "₹349" }] },
  { category: "Main Course", section: "Chinese", group: "Noodles", name: "Chilli Garlic Noodle", tag: "Mix", variants: [{ label: "Veg", price: "₹249" }, { label: "Non-Veg", price: "₹299" }, { label: "Mix", price: "₹349" }] },
  { category: "Main Course", section: "Chinese", group: "Noodles", name: "Schezwan Pan Fried Noodle", tag: "Mix", variants: [{ label: "Veg", price: "₹249" }, { label: "Non-Veg", price: "₹299" }, { label: "Mix", price: "₹349" }] },
  { category: "Main Course", section: "Continental Big Bites", group: "Veg", name: "Assorted Veg Rice with grilled paneer", price: "₹399", tag: "Veg" },
  { category: "Main Course", section: "Continental Big Bites", group: "Veg", name: "Thai Basil Rice with Exotic Grilled Veg Skewers", price: "₹399", tag: "Veg" },
  { category: "Main Course", section: "Continental Big Bites", group: "Non-Veg", name: "Grilled Chicken", price: "₹499", tag: "Non-Veg" },
  { category: "Main Course", section: "Continental Big Bites", group: "Non-Veg", name: "Chicken Stroganoff", price: "₹499", tag: "Non-Veg" },
  { category: "Main Course", section: "Continental Big Bites", group: "Non-Veg", name: "Grilled Fish", price: "₹549", tag: "Fish" },
  { category: "Main Course", section: "Continental Big Bites", group: "Non-Veg", name: "Creamy Butter Garlic Fish", price: "₹549", tag: "Fish" },

  { category: "Desserts", section: "Desserts", name: "Vanilla Custard with fresh fruits", price: "₹299", tag: "Veg" },
  { category: "Desserts", section: "Desserts", name: "Ice-Cream Blast", price: "₹299", tag: "Veg" },
  { category: "Desserts", section: "Desserts", name: "Hot Chocolate Brownie", price: "₹299", tag: "Veg" },
  { category: "Desserts", section: "Desserts", name: "Nutella Pancake", price: "₹349", tag: "Veg" },
  { category: "Desserts", section: "Desserts", name: "Rasgulla Cheese Cake", price: "₹349", tag: "Veg" },
];

const events = [
  ["Live Music Nights", "Amber lights, lounge seating and a stage-ready weekend mood."],
  ["Birthday Table Booking", "Reserve a first-floor table for cake, photos and shared plates."],
  ["Group Hangout Offers", "Plan a Dunes evening for friends, colleges and office groups."],
];

const galleryItems = [
  {
    category: "Food",
    tagline: "Comfort food, cafe bites, and full-table favourites.",
    image: new URL("../assets/gallery-real/dunes-gallery-01.avif", import.meta.url).href,
  },
  {
    category: "Drinks",
    tagline: "Cold sips, mocktails, and easy evening orders.",
    image: new URL("../assets/gallery-real/dunes-gallery-02.jpeg", import.meta.url).href,
  },
  {
    category: "Hookah",
    tagline: "Slow evenings, relaxed tables, and lounge energy.",
    image: new URL("../assets/gallery-real/dunes-gallery-03.jpeg", import.meta.url).href,
  },
  {
    category: "Music Nights",
    tagline: "Live music, louder tables, and weekend plans.",
    image: new URL("../assets/gallery-real/dunes-gallery-04.jpg", import.meta.url).href,
  },
  {
    category: "Group Plans",
    tagline: "Birthdays, reunions, and last-minute meetups.",
    image: new URL("../assets/gallery-real/dunes-gallery-05.jpg", import.meta.url).href,
  },
  {
    category: "Dunes Vibe",
    tagline: "Warm lights, good food, and longer conversations.",
    image: new URL("../assets/gallery-real/dunes-gallery-06.jpg", import.meta.url).href,
  },
  {
    category: "Ambience",
    tagline: "A cozy Patuli corner made for evening hangouts.",
    image: new URL("../assets/gallery-real/dunes-gallery-07.jpg", import.meta.url).href,
  },
];

const mountCards = (id, items, render) => {
  const node = document.getElementById(id);
  if (!node) return;
  node.innerHTML = items.map(render).join("");
};

const renderHighlights = () => {
  mountCards(
    "highlights",
    highlights,
    ([title, text]) => `
      <article class="highlight-card">
        <span aria-hidden="true"></span>
        <h3>${title}</h3>
        <p>${text}</p>
      </article>
    `,
  );
};

const renderMenuTabs = () => {
  const tabs = document.getElementById("menuTabs");
  tabs.innerHTML = menuCategories
    .map(
      (category, index) => `
        <button class="menu-tab ${index === 0 ? "is-active" : ""}" type="button" data-category="${category}">
          ${category}
        </button>
      `,
    )
    .join("");
};

const renderMenuItems = (category = menuCategories[0]) => {
  const filtered = menuItems.filter((item) => item.category === category);
  const list = document.getElementById("menuList");

  list.innerHTML = filtered
    .map(
      (item) => `
        <article class="menu-item">
          <div class="menu-item__top">
            <span class="menu-tag menu-tag--${item.tag.toLowerCase().replace(/\W+/g, "-")}">${item.tag}</span>
            ${item.price ? `<span class="menu-price">${item.price}</span>` : ""}
          </div>
          <h3>${item.name}</h3>
          <div class="menu-item__meta">
            <span>${item.section}</span>
            ${item.group ? `<span>${item.group}</span>` : ""}
          </div>
          ${
            item.variants
              ? `<div class="menu-variants">${item.variants
                  .map(
                    (variant) => `
                      <span>
                        <strong>${variant.label}</strong>
                        ${variant.price}
                      </span>
                    `,
                  )
                  .join("")}</div>`
              : ""
          }
          ${item.note ? `<p class="menu-item__note">${item.note}</p>` : ""}
        </article>
      `,
    )
    .join("") +
    `
      <div class="menu-note">
        We also take party orders, event bookings, and private reservations.
      </div>
    `;
};

const bindMenuTabs = () => {
  const tabs = document.getElementById("menuTabs");
  tabs.addEventListener("click", (event) => {
    const tab = event.target.closest(".menu-tab");
    if (!tab) return;

    tabs.querySelectorAll(".menu-tab").forEach((button) => {
      button.classList.toggle("is-active", button === tab);
    });
    tab.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
    renderMenuItems(tab.dataset.category);
  });
};

const renderEvents = () => {
  const node = document.getElementById("eventGrid");
  node.innerHTML = `
    <div class="events-grid">
      ${events
        .map(
          ([title, text]) => `
      <article class="event-card">
        <div>
          <h3>${title}</h3>
          <p>${text}</p>
        </div>
      </article>
    `,
        )
        .join("")}
    </div>
    <div class="events-cta">
      <a class="event-card__button" href="${links.enquiry}">
        <span aria-hidden="true">WA</span>
        Enquire on WhatsApp
      </a>
    </div>
  `;
};

const renderGallery = () => {
  const node = document.getElementById("galleryGrid");
  if (!node) return;
  const slides = [...galleryItems, ...galleryItems];

  node.innerHTML = `
    <div class="gallery-carousel" aria-label="Dunes Cafe gallery carousel">
      <div class="gallery-track">
        ${slides
          .map(
            ({ category, image }) => `
              <figure class="gallery-card">
                <img src="${image}" alt="${category} at Dunes Cafe" loading="lazy" />
              </figure>
            `,
          )
          .join("")}
      </div>
    </div>
    <div class="gallery-dots" aria-label="Gallery navigation">
      ${galleryItems
        .map(
          ({ category }, index) => `
            <button class="gallery-dot ${index === 0 ? "is-active" : ""}" type="button" data-gallery-index="${index}" aria-label="Show ${category} image"></button>
          `,
        )
        .join("")}
    </div>
  `;
};

const bindGalleryCarousel = () => {
  const carousel = document.querySelector(".gallery-carousel");
  const dots = Array.from(document.querySelectorAll(".gallery-dot"));
  if (!carousel || !dots.length) return;

  let timerId;
  let isPaused = false;

  const getStep = () => {
    const firstCard = carousel.querySelector(".gallery-card");
    if (!firstCard) return carousel.clientWidth;
    const gap = Number.parseFloat(getComputedStyle(carousel).getPropertyValue("--gallery-gap")) || 16;
    return firstCard.getBoundingClientRect().width + gap;
  };

  const getOriginalWidth = () => getStep() * galleryItems.length;

  const setActiveDot = () => {
    const index = Math.round((carousel.scrollLeft % getOriginalWidth()) / getStep()) % galleryItems.length;
    dots.forEach((dot, dotIndex) => dot.classList.toggle("is-active", dotIndex === index));
  };

  const normalizeLoop = () => {
    const originalWidth = getOriginalWidth();
    if (carousel.scrollLeft >= originalWidth) {
      carousel.scrollLeft -= originalWidth;
    }
  };

  const advance = () => {
    if (isPaused) return;
    normalizeLoop();
    carousel.scrollBy({ left: getStep(), behavior: "smooth" });
  };

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const index = Number(dot.dataset.galleryIndex);
      carousel.scrollTo({ left: index * getStep(), behavior: "smooth" });
    });
  });

  carousel.addEventListener("scroll", () => {
    window.requestAnimationFrame(() => {
      normalizeLoop();
      setActiveDot();
    });
  });

  carousel.addEventListener("mouseenter", () => {
    isPaused = true;
  });

  carousel.addEventListener("mouseleave", () => {
    isPaused = false;
  });

  window.addEventListener("resize", setActiveDot);
  timerId = window.setInterval(advance, 3600);
  setActiveDot();
};

const hydrateLinks = () => {
  document.querySelectorAll("[data-link]").forEach((anchor) => {
    const key = anchor.dataset.link;
    anchor.href = links[key];
  });
};

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/dunescafe.patuli/",
    icon: SiInstagram,
  },
  {
    label: "Zomato",
    href: "https://www.zomato.com/kolkata/dunes-cafe-garia",
    icon: SiZomato,
  },
  {
    label: "Swiggy",
    href: "https://www.swiggy.com/city/kolkata/dunes-cafe-garia-rest375351",
    icon: SiSwiggy,
  },
];

const renderFooterSocials = () => {
  const node = document.getElementById("footerSocials");
  if (!node) return;

  createRoot(node).render(
    React.createElement(
      React.Fragment,
      null,
      socialLinks.map(({ label, href, icon: Icon }) =>
        React.createElement(
          "a",
          {
            key: label,
            className: "social-link",
            href,
            target: "_blank",
            rel: "noreferrer",
            "aria-label": label,
          },
          React.createElement(Icon, { "aria-hidden": true }),
        ),
      ),
    ),
  );
};

const init = () => {
  renderHighlights();
  renderMenuTabs();
  renderMenuItems();
  bindMenuTabs();
  renderEvents();
  renderGallery();
  bindGalleryCarousel();
  hydrateLinks();
  renderFooterSocials();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init, { once: true });
} else {
  init();
}
