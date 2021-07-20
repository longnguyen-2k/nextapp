import axios from 'axios';
import config from './config';
const creatForm = (data) => {
  let body = new FormData();
  for (const key in data) {
    body.append(key, data[key]);
  }
  return body;
};
const sendEmailContact = (email, name = 'Subscribe', message = 'Subscribe') => {
  let data = { email: email, name: name, message: message };
  axios
    .post(config.prefixUrl + '/emailsCollection', creatForm(data))
    .then((res) => {
      if (res.status == 201) {
        alert('Thank for your contact us');
      }
      if (res.status == 200) {
        alert(res.data.message);
      }
      if (res.status != 200 && res.status != 201) {
        alert('Something was wrong. Check your info');
      }
    });
};
const updateForm = (data) => {
  let formBody = [];
  for (let property in data) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(data[property]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  formBody = formBody.join('&');

  return formBody;
};
const submiUpdatetNews = (id, data) => {
  //image is string

  axios
    .put(config.prefixUrl + '/news/' + id, updateForm(data), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
    .then();
};

const getDataNew = async () => {
  return await axios.get(config.prefixUrl + '/news').then((res) => res.data);
};

const createNews = async (data) => {
  return await axios.post(config.prefixUrl + '/news', creatForm(data));
};
const getDataNewById = async (id) => {
  return await axios
    .get(config.prefixUrl + '/news/' + id)
    .then((res) => res.data);
};
export {
  sendEmailContact,
  submiUpdatetNews,
  getDataNew,
  createNews,
  getDataNewById,
};
