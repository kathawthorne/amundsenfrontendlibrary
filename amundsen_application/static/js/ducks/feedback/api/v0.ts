import axios from 'axios';

export function submitFeedback(data: FormData) {
  return axios({
    data,
    method: 'post',
    url: '/api/mail/v0/feedback',
    timeout: 5000,
    headers: {'Content-Type': 'multipart/form-data' }
  });
}
