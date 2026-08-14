export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  rating: number;
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "herb-crusted-salmon",
    name: "Herb-Crusted Salmon",
    description:
      "Pan-seared salmon finished with a basil-lemon crust, served over roasted seasonal vegetables.",
    price: "$24.50",
    rating: 5,
  },
  {
    id: "wild-mushroom-risotto",
    name: "Wild Mushroom Risotto",
    description:
      "Creamy arborio rice slow-cooked with wild mushrooms, parmesan, and a touch of truffle oil.",
    price: "$18.00",
    rating: 4,
  },
  {
    id: "grilled-chicken-caesar",
    name: "Grilled Chicken Caesar",
    description:
      "Grilled chicken breast over crisp romaine with parmesan and our house-made caesar dressing.",
    price: "$16.75",
    rating: 4,
  },
  {
    id: "basil-margherita-flatbread",
    name: "Basil Margherita Flatbread",
    description:
      "San Marzano tomatoes, fresh mozzarella, and torn basil leaves on a crisp flatbread crust.",
    price: "$14.25",
    rating: 5,
  },
  {
    id: "seared-duck-breast",
    name: "Seared Duck Breast",
    description:
      "Honey-glazed duck breast with a root vegetable puree and a rich red wine jus.",
    price: "$27.00",
    rating: 5,
  },
  {
    id: "heirloom-tomato-burrata",
    name: "Heirloom Tomato Burrata",
    description:
      "Creamy burrata with heirloom tomatoes, basil oil, and a drizzle of balsamic reduction.",
    price: "$15.50",
    rating: 4,
  },
];
