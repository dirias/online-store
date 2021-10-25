const faker = require('faker');
const boom = require('@hapi/boom');

class UsersService {
  constructor() {
    this.users = [];
    this.generate();
  }
  async generate() {
    const limit = 100;
    let name = '';
    let lastName = '';
    for (let index = 0; index < limit; index++) {
      name = faker.name.firstName();
      lastName = faker.name.lastName();
      this.users.push({
        id: faker.datatype.uuid(),
        name: name,
        lastName: lastName,
        phone: faker.phone.phoneNumber(),
        contry: faker.address.country(),
        email: name + lastName + '@gmail.com',
        isActive: faker.datatype.boolean(),
      });
    }
  }

  find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.users);
      }, 2000);

    })
  }
  async findOne(id) {
    const user = this.users.find(item => item.id === id);
    if (!user) {
      throw boom.notFound('user not found');
    }
    if (!user.isActive){
      throw boom.conflict('The user is block');
    }
    return user;

  }
}
module.exports = UsersService;
