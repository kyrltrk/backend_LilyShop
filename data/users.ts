import bcrypt from "bcryptjs";

interface User {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

const users: User[]= [
  {
    name: "Admin",
    email: "admin@gmail.com",
    password: "123456",
    isAdmin: true,
  },
  {
    name: "Luis Lara",
    email: "luis@gmail.com",
    password: "123456",
    isAdmin: false,
  },
];

export default users;
