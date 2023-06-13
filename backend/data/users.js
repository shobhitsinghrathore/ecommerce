import bcrypt from "bcryptjs";

const users = [
    {
        name: 'Admin User',
        email: 'admin@email.com',
        password : bcrypt.hashSync('123456', 10),
        isAdmin : true,
    },
    {
        name: 'shobhit kumar',
        email: 'shobhit@email.com',
        password : bcrypt.hashSync('123456', 10),
        isAdmin : false,
    },
    {
        name: 'golu',
        email: 'golu@email.com',
        password : bcrypt.hashSync('123456', 10),
        isAdmin : false,
    },

];

export default users;