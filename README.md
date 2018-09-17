# electron-react-pusher-chat

Simple Electron chat app
### ! Still under development

### Prerequisites

This app is built using Pusher Chatkit beta
Visit [Pusher Chatkit](https://pusher.com/chatkit), register and create your own chatkit instance.

### Installing

```
npm i
```
Create .env file from .env.example

Replace values from Pusher Chatkit Dashboard

```
// .env

REACT_APP_INSTANCE_LOCATOR='YOUR_PUSHER_CHATKIT_INSTANCE_LOCATOR'
REACT_APP_KEY='YOUR_PUSHER_CHATKIT_KEY'
REACT_APP_TOKEN_PROVIDER_URL='YOUR_PUSHER_CHATKIT_TEST_TOKEN_PROVIDER'

```

Scroll down in Chatkit dashboard to find Instance Inspector, 
then create a room, copy it's ID.
We will use this room as a default #general room.


```
// .env

REACT_APP_DEFAULT_ROOM_ID= 999, // default general room

```

### Running

```
npm run dev
```

## Built With

* [React](https://reactjs.org/docs/getting-started.html)
* [Electron](https://electronjs.org/docs)
* [Pusher Chatkit](https://pusher.com/chatkit) - Chat SDK
* [Express.js](https://expressjs.com/) - Node.js framework

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
