# electron-react-pusher-chat

Simple Electron chat app

### Prerequisites

This app is built using Pusher Chatkit beta
Visit [Pusher Chatkit](https://pusher.com/chatkit), register and create your own chatkit instance.

### Installing

```
npm i
```

Replace chatkit credentials in  with your chatkit instance credentials. Find them in chatkit dashboard.

```
// ./src/components/chatScreen.js

const chatManager = new Chatkit.ChatManager({
            instanceLocator: 'YOUR INSTANCE LOCATOR',
            userId: this.props.currentUsername,
            tokenProvider: new Chatkit.TokenProvider({
                url: 'YOUR TEST TOKEN PROVIDER URL'
            }),
        })
```

```
// ./server.js

const chatkit = new Chatkit.default({
  instanceLocator: 'YOUR INSTANCE LOCATOR',
  key:
    'YOUR INSTANCE KEY'
})
```

Scroll down in Chatkit dashboard to find Instance Inspector, 
then create a room, copy it's ID and replace in the code on line 43.
We will use this room as a default #general room.


```
// ./src/components/chatScreen.js

roomId: 13291423, // default general room

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
