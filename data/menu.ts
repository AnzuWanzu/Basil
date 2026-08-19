import type { StaticImageData } from "next/image";
import lunch1 from "@/components/assets/menu-section/lunch-1.jpg";
import lunch2 from "@/components/assets/menu-section/lunch-2.jpg";
import lunch3 from "@/components/assets/menu-section/lunch-3.jpg";
import lunch4 from "@/components/assets/menu-section/lunch-4.jpg";
import lunch5 from "@/components/assets/menu-section/lunch-5.jpg";
import dinner1 from "@/components/assets/menu-section/dinner-1.jpg";
import dinner2 from "@/components/assets/menu-section/dinner-2.jpg";
import dinner3 from "@/components/assets/menu-section/dinner-3.jpg";
import snacks1 from "@/components/assets/menu-section/snacks-1.jpg";
import snacks2 from "@/components/assets/menu-section/snacks-2.jpg";
import snacks3 from "@/components/assets/menu-section/snacks-3.jpg";
import cafe1 from "@/components/assets/menu-section/cafe-1.jpg";
import cafe2 from "@/components/assets/menu-section/cafe-2.jpg";
import cafe3 from "@/components/assets/menu-section/cafe-3.jpg";

export type MenuCategory = "lunch" | "dinner" | "snacks" | "cafe";

export const MENU_CATEGORIES: { key: MenuCategory; label: string }[] = [
  { key: "lunch", label: "Lunch" },
  { key: "dinner", label: "Dinner" },
  { key: "snacks", label: "Snacks" },
  { key: "cafe", label: "Café" },
];

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  rating: number;
  category: MenuCategory;
  image: StaticImageData;
};

export const MENU_ITEMS: MenuItem[] = [
  // Lunch
  {
    id: "basils-bulalo",
    name: "Basil's Bulalo",
    description: "Made by slow-cooking beef shanks and bone marrow until the collagen and fat has melted into a light-colored broth.",
    price: "₱140.00",
    rating: 5,
    category: "lunch",
    image: lunch1,
  },
  {
    id: "baked-maki",
    name: "Baked Maki",
    description:
      "Taste of Cora's special Baked Maki marinated in Japanese style sauce, baked to perfection with a golden crust.",
    price: "₱350.00",
    rating: 4,
    category: "lunch",
    image: lunch2,
  },
  {
    id: "potato-salad",
    name: "Potato Salad with Scampi",
    description: "Potato salad with scampi, a classic dish that combines creamy potatoes with succulent shrimp, dressed in a tangy vinaigrette.",
    price: "₱200.00",
    rating: 5,
    category: "lunch",
    image: lunch3,
  },
  {
    id: "ramen",
    name: "Ramen",
    description: "A traditional Japanese noodle soup with a rich, savory broth and a variety of toppings.",
    price: "₱300.00",
    rating: 5,
    category: "lunch",
    image: lunch4,
  },
  {
    id: "seafood-pasta",
    name: "Seafood Pasta",
    description: "A delightful pasta dish loaded with fresh seafood and a rich, flavorful sauce.",
    price: "₱350.00",
    rating: 5,
    category: "lunch",
    image: lunch5,
  },
  // Dinner
  {
    id: "baked-maki-and-kaarage",
    name: "Baked Maki & Kaarage",
    description:
      "Taste of Cora's special Baked Maki and Kaarage marinated in Japanese style sauce!",
    price: "₱600.00",
    rating: 5,
    category: "dinner",
    image: dinner1,
  },
  {
    id: "spring-chicken-with-rosemary",
    name: "Spring Chicken with Rosemary",
    description: "Oven-baked and butter basted spring chicken with mixed vegetables.",
    price: "₱350.00",
    rating: 4,
    category: "dinner",
    image: dinner2,
  },
  {
    id: "american-style-steak",
    name: "American Style Steak",
    description: "Juicy beef steak seasoned with a blend of herbs and spices, served with roasted vegetables.",
    price: "₱500.00",
    rating: 4,
    category: "dinner",
    image: dinner3,
  },
  // Snacks
  {
    id: "fruit-platter-and-chocolate-dip",
    name: "Fruit Platter and Chocolate Dip",
    description: "A selection of fresh, seasonal fruits served with a rich, decadent chocolate dip.",
    price: "₱200.00",
    rating: 5,
    category: "snacks",
    image: snacks1,
  },
  {
    id: "mango-iced-sago-with-ice-cream",
    name: "Mango Iced Sago with Ice Cream",
    description: "A refreshing dessert featuring chewy sago pearls in a mango-flavored syrup, topped with vanilla ice cream.",
    price: "₱180.00",
    rating: 4,
    category: "snacks",
    image: snacks2,
  },
  {
    id: "homemade-cookies",
    name: "Homemade Cookies",
    description: "Freshly baked cookies with a variety of flavors and textures.",
    price: "₱100.00",
    rating: 5,
    category: "snacks",
    image: snacks3,
  },
  // Café
  {
    id: "caramel-latte",
    name: "Caramel Latte",
    description: "Our signature espresso with a drizzle of caramel and steamed milk.",
    price: "₱120.00",
    rating: 5,
    category: "cafe",
    image: cafe1,
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    description: "Our signature espresso with steamed milk and a light layer of foam.",
    price: "₱130.00",
    rating: 4,
    category: "cafe",
    image: cafe2,
  },
  {
    id: "house-hot-coco",
    name: "House Hot Coco",
    description: "A warm and comforting drink made with rich, creamy coconut milk.",
    price: "₱100.00",
    rating: 4,
    category: "cafe",
    image: cafe3,
  },
];
