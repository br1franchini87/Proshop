import bcrypt from "bcryptjs";

const users = [
    {
        name: "Admin user",
        email: "admin@example.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: true,
    },
    {
        name: "El washi",
        email: "washi@example.com",
        password: bcrypt.hashSync("123456", 10),
    },
    {
        name: "jaimico",
        email: "jaimico@example.com",
        password: bcrypt.hashSync("123456", 10),
    },
];

export default users;
