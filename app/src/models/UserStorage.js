'use strict';

class UserStorage {
    static #users = {
        id: ['dhwldwld', 'brown0418', 'guq1tkd'],
        psword: ['0418', '8167', '6412'],
    }

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;