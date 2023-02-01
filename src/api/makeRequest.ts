import axios, {Method} from 'axios';

export const makeRequest = async (
    url: string,
    method: Method = 'GET',
    body: any = null,
    headers: any = {},
): Promise<any> => {
  if (body) {
    body = JSON.stringify(body);
    headers['Content-Type'] = 'application/json';
  }

  return await new Promise(
      (resolve, reject) =>
        axios({url, method, headers})
            .then((r) => resolve(r.data))
            .catch((e) => reject(e)),
  );
};

