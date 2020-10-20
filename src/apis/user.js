import { api } from '../boot/axios';

const path = 'employees';

export default {
  async getEmployees(payload) {
    var config;
    /*  var config = {
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
      },
    }; */
    return new Promise((resolve, reject) => {
      api
        .get(path + payload, config)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
};
