const generateId = () => Math.random().toString(36).substr(2, 9);

export const goods = [
  {
    id: generateId(),
    image: "src/assets/t-shirt-1.jpg",
    title: "Gradient Graphic T-shirt",
    stars: 3.5,
    price: 145,
    category: "T-Shirts",
    colors: ["#FFC0CB", "#FFFFFF"],
    size: ["Large", "X-Large", "X-Small", "4X-Large", "Medium", "2X-Large", "Small"]
  },
  {
    id: generateId(),
    image: "src/assets/t-shirt-2.jpg",
    title: "Polo with Tipping Details",
    stars: 4.5,
    price: 180,
    category: "T-Shirts",
    colors: ["#FFC0CB", "#FFFFFF"],
    size: ["Large", "X-Large", "X-Small", "4X-Large", "Medium", "2X-Large", "Small"]
  },
  {
    id: generateId(),
    image: "https://placehold.co/295x295?text=Classic+White+T-Shirt",
    title: "Classic White T-Shirt",
    stars: 3.0,
    price: 46.03,
    category: "Sweaters",
    colors: ["#FFC0CB", "#FFFFFF"],
    size: ["Large", "X-Large", "X-Small", "4X-Large", "Medium", "2X-Large", "Small"]
  },
  {
    id: generateId(),
    image: "https://placehold.co/295x295?text=Denim+Jacket",
    title: "Denim Jacket",
    stars: 3.0,
    price: 67.88,
    category: "Pants",
    colors: ["#0000FF"],
    size: ["Large", "3X-Large", "X-Small", "4X-Large"]
  },
  {
    id: generateId(),
    image: "https://placehold.co/295x295?text=Black+Skinny+Jeans",
    title: "Black Skinny Jeans",
    stars: 2.5,
    price: 101.88,
    category: "Tops",
    colors: ["#008000", "#FFC0CB", "#FF0000", "#FFFF00"],
    size: ["Medium", "Large", "X-Small", "Small", "X-Large"]
  },
  {
    id: generateId(),
    image: "https://placehold.co/295x295?text=Hooded+Sweatshirt",
    title: "Hooded Sweatshirt",
    stars: 1.5,
    price: 27.86,
    category: "Tops",
    colors: ["#FF0000", "#000000", "#FFFF00", "#A52A2A"],
    size: ["2X-Large", "3X-Large", "X-Large", "Large", "Small", "4X-Large"]
  },
  {
    id: generateId(),
    image: "https://placehold.co/295x295?text=Plaid+Flannel+Shirt",
    title: "Plaid Flannel Shirt",
    stars: 4.0,
    price: 85.03,
    category: "Blazers",
    colors: ["#A52A2A", "#008000", "#FFFFFF", "#000000"],
    size: ["3X-Large", "X-Large", "Medium", "X-Small", "Small", "Large"]
  },
  {
    id: generateId(),
    image: "https://placehold.co/295x295?text=Cotton+Shorts",
    title: "Cotton Shorts",
    stars: 4.5,
    price: 118.03,
    category: "Hoodies",
    colors: ["#A52A2A"],
    size: ["3X-Large", "X-Large", "Small", "2X-Large", "Large", "Medium"]
  },
  {
    id: generateId(),
    image: "https://placehold.co/295x295?text=Slim+Fit+Blazer",
    title: "Slim Fit Blazer",
    stars: 3.5,
    price: 75.15,
    category: "Tops",
    colors: ["#FFFF00", "#FFFFFF"],
    size: ["4X-Large", "X-Large", "Small", "2X-Large", "Large", "X-Small", "Medium"]
  },
  {
    id: generateId(),
    image: "https://placehold.co/295x295?text=Casual+Chinos",
    title: "Casual Chinos",
    stars: 2.0,
    price: 114.11,
    category: "T-Shirts",
    colors: ["#F5F5DC", "#0000FF", "#FFFF00"],
    size: ["Small", "X-Small", "Large", "Medium", "3X-Large", "4X-Large"]
  },
  {
    id: generateId(),
    image: "https://placehold.co/295x295?text=Graphic+T-Shirt",
    title: "Graphic T-Shirt",
    stars: 1.0,
    price: 38.79,
    category: "Pants",
    colors: ["#FFC0CB"],
    size: ["Small", "2X-Large", "4X-Large", "Large", "3X-Large", "X-Small", "X-Large"]
  },
  {
    id: generateId(),
    image: "https://placehold.co/295x295?text=Zip-Up+Hoodie",
    title: "Zip-Up Hoodie",
    stars: 5.0,
    price: 20.32,
    category: "Coats",
    colors: ["#008000", "#FF0000", "#808080", "#FFFF00"],
    size: ["X-Small", "3X-Large", "Large", "Medium"]
  },
  {
    id: generateId(),
    image: "https://placehold.co/295x295?text=Polo+Shirt",
    title: "Polo Shirt",
    stars: 2.5,
    price: 102.07,
    category: "T-Shirts",
    colors: ["#FFC0CB", "#A52A2A"],
    size: ["Large", "2X-Large", "Small", "X-Small", "X-Large", "Medium"]
  },
  {
    id: generateId(),
    image: "https://placehold.co/295x295?text=Bomber+Jacket",
    title: "Bomber Jacket",
    stars: 4.5,
    price: 89.62,
    category: "Shirts",
    colors: ["#FFFF00", "#FF0000"],
    size: ["Large", "Small", "3X-Large", "4X-Large", "2X-Large", "X-Small"]
  },
  {
    id: generateId(),
    image: "https://placehold.co/295x295?text=Sweater+Dress",
    title: "Sweater Dress",
    stars: 3.5,
    price: 23.82,
    category: "Jackets",
    colors: ["#F5F5DC", "#808080", "#A52A2A", "#FFFF00"],
    size: ["X-Large", "Small", "Large"]
  },
  {
    id: generateId(),
    image: "https://placehold.co/295x295?text=Tank+Top",
    title: "Tank Top",
    stars: 1.5,
    price: 102.85,
    category: "Sweaters",
    colors: ["#F5F5DC", "#808080"],
    size: ["4X-Large", "3X-Large", "Large", "2X-Large", "Medium"]
  },
  {
    id: generateId(),
    image: "https://placehold.co/295x295?text=Peacoat",
    title: "Peacoat",
    stars: 3.0,
    price: 17.84,
    category: "Tops",
    colors: ["#FFC0CB", "#FFFFFF"],
    size: ["Medium", "Small", "X-Large", "4X-Large", "Large", "3X-Large", "X-Small"]
  },
  {
    id: generateId(),
    image: "https://placehold.co/295x295?text=Dress+Shirt",
    title: "Dress Shirt",
    stars: 3.0,
    price: 77.47,
    category: "Shorts",
    colors: ["#0000FF", "#FFC0CB", "#FF0000", "#FFFF00"],
    size: ["Medium", "X-Large", "Small", "2X-Large", "Large", "4X-Large"]
  },
  {
    id: generateId(),
    image: "https://placehold.co/295x295?text=Running+Shorts",
    title: "Running Shorts",
    stars: 1.5,
    price: 17.44,
    category: "Shorts",
    colors: ["#FFC0CB", "#808080"],
    size: ["3X-Large", "4X-Large", "Large", "Medium", "X-Small", "X-Large"]
  },
  {
    id: generateId(),
    image: "https://placehold.co/295x295?text=Linen+Blazer",
    title: "Linen Blazer",
    stars: 4.5,
    price: 74.16,
    category: "Pants",
    colors: ["#FF0000", "#008000", "#FFFF00"],
    size: ["Small", "2X-Large", "X-Small"]
  },
  {
    id: generateId(),
    image: "https://placehold.co/295x295?text=Cargo+Pants",
    title: "Cargo Pants",
    stars: 3.0,
    price: 106.21,
    category: "Hoodies",
    colors: ["#FFFF00"],
    size: ["Small", "Medium", "4X-Large"]
  },
  {
    id: generateId(),
    image: "https://placehold.co/295x295?text=V-Neck+Tee",
    title: "V-Neck Tee",
    stars: 1.5,
    price: 69.75,
    category: "Tops",
    colors: ["#FFFF00", "#0000FF", "#FFC0CB"],
    size: ["3X-Large", "4X-Large", "Small", "X-Small", "2X-Large", "Large", "X-Large"]
  },
  {
    id: generateId(),
    image: "https://placehold.co/295x295?text=Fleece+Jacket",
    title: "Fleece Jacket",
    stars: 3.0,
    price: 34.42,
    category: "Hoodies",
    colors: ["#008000", "#FF0000"],
    size: ["2X-Large", "X-Large", "X-Small", "4X-Large"]
  },
  {
    id: generateId(),
    image: "https://placehold.co/295x295?text=Cardigan+Sweater",
    title: "Cardigan Sweater",
    stars: 1.5,
    price: 66.25,
    category: "Jackets",
    colors: ["#808080", "#008000", "#FFFFFF", "#FFC0CB"],
    size: ["X-Large", "X-Small", "Small", "Medium", "Large", "3X-Large", "2X-Large"]
  },
  {
    id: generateId(),
    image: "https://placehold.co/295x295?text=Off-Shoulder+Top",
    title: "Off-Shoulder Top",
    stars: 5.0,
    price: 37.49,
    category: "Jackets",
    colors: ["#FFFF00", "#FF0000", "#F5F5DC"],
    size: ["Medium", "Large", "2X-Large", "X-Large"]
  },
  {
    id: generateId(),
    image: "https://placehold.co/295x295?text=Raincoat",
    title: "Raincoat",
    stars: 3.0,
    price: 17.8,
    category: "Hoodies",
    colors: ["#A52A2A", "#FFFF00"],
    size: ["Medium", "4X-Large", "2X-Large", "3X-Large", "X-Small", "Small", "Large"]
  },
  {
    id: generateId(),
    image: "https://placehold.co/295x295?text=Button-Down+Shirt",
    title: "Button-Down Shirt",
    stars: 1.5,
    price: 67.38,
    category: "T-Shirts",
    colors: ["#FFC0CB", "#0000FF", "#FFFF00"],
    size: ["X-Small", "3X-Large", "Small"]
  },
  {
    id: generateId(),
    image: "https://placehold.co/295x295?text=Bermuda+Shorts",
    title: "Bermuda Shorts",
    stars: 3.0,
    price: 118.12,
    category: "Tops",
    colors: ["#808080", "#000000", "#FFFF00"],
    size: ["Large", "3X-Large", "4X-Large"]
  },
  {
    id: generateId(),
    image: "https://placehold.co/295x295?text=Tweed+Blazer",
    title: "Tweed Blazer",
    stars: 4.0,
    price: 16.88,
    category: "Hoodies",
    colors: ["#808080", "#FFFF00", "#FFFFFF"],
    size: ["X-Large", "2X-Large", "X-Small"]
  },
  {
    id: generateId(),
    image: "https://placehold.co/295x295?text=Khaki+Pants",
    title: "Khaki Pants",
    stars: 1.5,
    price: 68.38,
    category: "Jackets",
    colors: ["#FFFFFF", "#F5F5DC", "#0000FF"],
    size: ["X-Small", "Medium", "Small", "X-Large", "2X-Large", "Large"]
  },
  {
    id: generateId(),
    image: "https://placehold.co/295x295?text=Long+Sleeve+Tee",
    title: "Long Sleeve Tee",
    stars: 3.5,
    price: 65.92,
    category: "Tops",
    colors: ["#FF0000", "#FFFF00"],
    size: ["2X-Large", "Small", "4X-Large", "Large", "3X-Large", "X-Small", "X-Large"]
  },
  {
    id: generateId(),
    image: "https://placehold.co/295x295?text=Down+Jacket",
    title: "Down Jacket",
    stars: 1.5,
    price: 33.3,
    category: "Shorts",
    colors: ["#808080", "#FFFFFF", "#A52A2A", "#FF0000"],
    size: ["Large", "X-Large", "Medium", "3X-Large", "Small"]
  },
  {
    id: generateId(),
    image: "https://placehold.co/295x295?text=Wool+Sweater",
    title: "Wool Sweater",
    stars: 2.5,
    price: 48.99,
    category: "Jackets",
    colors: ["#008000", "#FFFF00"],
    size: ["4X-Large", "Large", "X-Small"]
  },
  {
    id: generateId(),
    image: "https://placehold.co/295x295?text=Crop+Top",
    title: "Crop Top",
    stars: 3.0,
    price: 44.62,
    category: "Pants",
    colors: ["#008000", "#808080"],
    size: ["3X-Large", "Small", "4X-Large", "X-Large", "X-Small"]
  },
  {
    id: generateId(),
    image: "https://placehold.co/295x295?text=Parka",
    title: "Parka",
    stars: 3.0,
    price: 116.74,
    category: "Sweaters",
    colors: ["#A52A2A", "#FF0000"],
    size: ["Large", "Small", "2X-Large"]
  },
  {
    id: generateId(),
    image: "https://placehold.co/295x295?text=Oxford+Shirt",
    title: "Oxford Shirt",
    stars: 4.0,
    price: 39.64,
    category: "Tops",
    colors: ["#FF0000", "#A52A2A"],
    size: ["X-Small", "Large", "4X-Large", "2X-Large"]
  },
  {
    id: generateId(),
    image: "https://placehold.co/295x295?text=Board+Shorts",
    title: "Board Shorts",
    stars: 3.5,
    price: 100.38,
    category: "Jackets",
    colors: ["#000000", "#F5F5DC"],
    size: ["X-Large", "4X-Large", "Large"]
  },
  {
    id: generateId(),
    image: "https://placehold.co/295x295?text=Double-Breasted+Blazer",
    title: "Double-Breasted Blazer",
    stars: 1.0,
    price: 114.58,
    category: "Hoodies",
    colors: ["#FFC0CB", "#A52A2A", "#FFFF00"],
    size: ["X-Small", "X-Large", "3X-Large", "Medium"]
  },
  {
    id: generateId(),
    image: "https://placehold.co/295x295?text=Jogger+Pants",
    title: "Jogger Pants",
    stars: 1.5,
    price: 76.03,
    category: "Blazers",
    colors: ["#808080"],
    size: ["Medium", "X-Small", "4X-Large", "2X-Large", "3X-Large", "X-Large", "Small"]
  },
  {
    id: generateId(),
    image: "https://placehold.co/295x295?text=Henley+Tee",
    title: "Henley Tee",
    stars: 1.0,
    price: 55.02,
    category: "Blazers",
    colors: ["#FFC0CB", "#FFFF00", "#808080", "#008000"],
    size: ["X-Small", "Large", "2X-Large", "4X-Large"]
  },
  {
    id: generateId(),
    image: "https://placehold.co/295x295?text=Anorak+Jacket",
    title: "Anorak Jacket",
    stars: 4.5,
    price: 87.34,
    category: "Jackets",
    colors: ["#0000FF", "#A52A2A", "#FFFF00", "#FFC0CB"],
    size: ["4X-Large", "Small", "X-Large"]
  },
  {
    id: generateId(),
    image: "https://placehold.co/295x295?text=Tunic+Top",
    title: "Tunic Top",
    stars: 4.0,
    price: 49.93,
    category: "T-Shirts",
    colors: ["#808080"],
    size: ["Small", "X-Large", "4X-Large", "Medium"]
  },
  {
    id: generateId(),
    image: "https://placehold.co/295x295?text=Windbreaker",
    title: "Windbreaker",
    stars: 3.0,
    price: 102.03,
    category: "Shorts",
    colors: ["#FFFFFF", "#008000", "#FFFF00"],
    size: ["Large", "X-Large", "3X-Large", "X-Small"]
  },
  {
    id: generateId(),
    image: "https://placehold.co/295x295?text=Cable+Knit+Sweater",
    title: "Cable Knit Sweater",
    stars: 4.5,
    price: 117.95,
    category: "Hoodies",
    colors: ["#F5F5DC", "#FFFFFF", "#FFFF00", "#808080"],
    size: ["X-Small", "Medium", "4X-Large", "Large"]
  },
  {
    id: generateId(),
    image: "https://placehold.co/295x295?text=Sequin+Top",
    title: "Sequin Top",
    stars: 2.5,
    price: 94.91,
    category: "Shorts",
    colors: ["#FFFFFF", "#000000", "#A52A2A"],
    size: ["X-Large", "3X-Large", "2X-Large", "Medium"]
  },
  {
    id: generateId(),
    image: "https://placehold.co/295x295?text=Trench+Coat",
    title: "Trench Coat",
    stars: 5.0,
    price: 78.57,
    category: "Jackets",
    colors: ["#000000", "#808080", "#F5F5DC", "#0000FF"],
    size: ["Large", "Small", "X-Small"]
  },
  {
    id: generateId(),
    image: "https://placehold.co/295x295?text=Chambray+Shirt",
    title: "Chambray Shirt",
    stars: 4.5,
    price: 63.38,
    category: "Hoodies",
    colors: ["#808080", "#FF0000", "#008000", "#FFC0CB"],
    size: ["Small", "X-Small", "3X-Large", "X-Large", "4X-Large"]
  },
  {
    id: generateId(),
    image: "https://placehold.co/295x295?text=Chino+Shorts",
    title: "Chino Shorts",
    stars: 4.5,
    price: 30.5,
    category: "T-Shirts",
    colors: ["#000000", "#F5F5DC", "#FFFF00"],
    size: ["Large", "2X-Large", "Medium", "X-Large"]
  },
  {
    id: generateId(),
    image: "https://placehold.co/295x295?text=Velvet+Blazer",
    title: "Velvet Blazer",
    stars: 3.0,
    price: 33.95,
    category: "T-Shirts",
    colors: ["#FFFF00", "#FF0000", "#008000"],
    size: ["2X-Large", "Small", "X-Small", "3X-Large", "Large", "Medium", "4X-Large"]
  },
  {
    id: generateId(),
    image: "https://placehold.co/295x295?text=Straight-Leg+Jeans",
    title: "Straight-Leg Jeans",
    stars: 4.5,
    price: 107.47,
    category: "Shirts",
    colors: ["#0000FF"],
    size: ["Medium", "4X-Large", "3X-Large", "Large", "Small"]
  },
  {
    id: generateId(),
    image: "https://placehold.co/295x295?text=Graphic+Hoodie",
    title: "Graphic Hoodie",
    stars: 4.5,
    price: 64.5,
    category: "Blazers",
    colors: ["#FF0000", "#FFC0CB"],
    size: ["X-Small", "Small", "4X-Large", "Medium"]
  },
  {
    id: generateId(),
    image: "https://placehold.co/295x295?text=Sleeveless+Tee",
    title: "Sleeveless Tee",
    stars: 2.0,
    price: 66.46,
    category: "Shorts",
    colors: ["#000000"],
    size: ["4X-Large", "Small", "3X-Large", "X-Small"]
  },
];