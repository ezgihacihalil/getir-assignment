function fetcher(method, url, data, headers = {}) {
  return new Promise((resolve, reject) => {
    const headerList = Object.assign(headers, {
      'Content-Type': 'application/json;',
    });

    const config = {
      method,
      // eslint-disable-next-line no-undef
      headers: new Headers(headerList),
    };

    if (method === 'POST' || method === 'PUT') {
      config.body = JSON.stringify(data);
    }

    if (method === 'DELETE') {
      // eslint-disable-next-line no-undef
      return fetch(url, config).then(
        (response) => {
          if (response.ok) {
            resolve({ headers: response.headers });
          }
        },
      ).catch((err) => reject(err));
    }

    // eslint-disable-next-line no-undef
    return fetch(url, config).then(
      (response) => {
        if (response.ok) {
          response
            .json()
            .then((respJSON) => (respJSON.error
              ? reject(respJSON) : resolve({ headers: response.headers, data: respJSON })));
        } else {
          response
            .json()
            .then((respJSON) => reject(respJSON));
        }
      },
    ).catch((err) => reject(err));
  });
}

export default {
  get: (url, headers) => fetcher('GET', url, null, headers),
  post: (url, body, headers) => fetcher('POST', url, body, headers),
  delete: (url, headers) => fetcher('DELETE', url, null, headers),
  put: (url, body, headers) => fetcher('PUT', url, body, headers),
};
