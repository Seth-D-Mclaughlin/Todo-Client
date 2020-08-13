let APIURL ='';

switch (window.location.hostname) {
  case 'localhost' || '127.0.0.1':
    APIURL = 'http://localhost:3001'
    break;

    case 'todo-client-deploy.herokuapp.com':
      APIURL = 'https://todo-client-deploy.herokuapp.com'
}

export default APIURL;