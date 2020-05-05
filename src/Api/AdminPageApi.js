import axios from 'axios';
import * as ClientConfig from '../appsettings.json';

export function fetchAllUsers() {
  return axios({
    method: "get",
    url: `${ClientConfig.apiBaseUrl}/`
  }).then(response => response.data);
}

export function fetchUser(id) {
    return axios({
      method: "get",
      url: `${ClientConfig.apiBaseUrl}/getUser/${id}`
    }).then(response => response.data);
  }
