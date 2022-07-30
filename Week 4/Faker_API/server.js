const express = require("express");
const app = express();
const PORT = 8000;

const { faker } = require('@faker-js/faker');
// import { faker } from '@faker-js/faker/locale/de';

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
});

const createUser = () => {
    return {
        userId: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName:faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phone: faker.phone.number('###-###-###'),
    };
}

const createCompany = () => {
    return {
        companyId: faker.datatype.uuid(),
        name: faker.company.companyName(),
        address: {  
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        }
    }
};


app.get("/api/users/new", (req, res) => {
    const user = createUser()
    res.json({ user})
});

app.get("/api/companies/new", (req, res) => {
    const company = createCompany()
    res.json({company})
})

app.get("/api/user/company", (req, res) => {
    const user = createUser()
    const company = createCompany()
    res.json({user, company})
})