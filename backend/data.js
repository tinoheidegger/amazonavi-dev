import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "tino",
      email: "admin@admin.com",
      password: bcrypt.hashSync("tino", 8),
      isAdmin: true,
    },
    {
      name: "tino1",
      email: "tino1@example.com",
      password: bcrypt.hashSync("tino1", 8),
      isAdmin: false,
    },
  ],

  products: [
    {
      name: "Nike Slim Shirt",
      category: "Shirts",
      image: "/images/nike-p1.jpg",
      price: 90,
      brand: "Raymond",
      rating: 4.5,
      numReviews: 10,
      countInStock: 10,
      description: "A popular shirt",
    },
    {
      name: "Golf Pants",
      category: "Pants",
      image: "/images/pants1.jpg",
      price: 190,
      brand: "Raymond",
      rating: 3.0,
      numReviews: 10,
      countInStock: 20,
      description: "High quality product",
    },
    {
      name: "Beautiful Shirt",
      category: "Shirts",
      image: "/images/slim-p3.jpg",
      price: 100,
      brand: "Raymond",
      rating: 4.8,
      numReviews: 17,
      countInStock: 7,
      description: "A popular shirt",
    },
    {
      name: "Fit Pants",
      category: "Pants",
      image: "/images/fit-pants.jpg",
      price: 150,
      brand: "Nike",
      rating: 7,
      numReviews: 21,
      countInStock: 15,
      description: "A High quality pants",
    },
    {
      name: " Slim Shirt",
      category: "Shirts",
      image: "/images/shirt5.jpg",
      price: 90,
      brand: "Raymond",
      rating: 4,
      numReviews: 10,
      countInStock: 5,
      description: "A popular shirt",
    },
    {
      name: "Choco Pants",
      category: "Pants",
      image: "/images/pants6.jpg",
      price: 70,
      brand: "Puma",
      rating: 10,
      numReviews: 10,
      countInStock: 12,
      description: "A popular pants",
    },
  ],
};
export default data;