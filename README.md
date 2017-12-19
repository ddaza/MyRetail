# myRetail Reactive Store Front

follow the instructions to run myRetail website:

* On the root folder you want to start by:
  ```sh
   $ yarn install
  ```
* Once it is __done__ you should run the server to start your App
  ```sh
   $ npm start
  ```
  this would start the app on `localhost:5050`

* If you want to start the __dev__ enviroment
  ```sh
   $ npm run dev
  ```
  This would start the __[webpack](https://webpack.github.io/)__ dev enviroment and you would be able to make changes to the code without restarting your server.

* To run the tests, use this command

  ```sh
   $ npm run tests
  ```

### Continuous Integration

There is a lot to do in this area. Since we use a node server we can deploy it into a container. Docker comes to mind.

There can also be a lot more tests written. However since we are using [Redux](redux.js.org) it can be enough to tests the reducers that contains the business logic.

Also we can add githooks for PRs and test the code at every step of the way.

Lastly we added linters as part of the build process to make sure the code quality is uniform across enviroments.

  ```
  +---------------------+        +-----------------+          +------------------+
  |                     |  Tests |                 |  QA      |                  |
  |  Dev Enviroment     +-------->    Staging      +---------->     Production   |
  |                     | GitHook|                 | Smoke    |                  |
  +---------------------+ Linter +-----------------+ Tests    +------------------+
  ```

## License

MIT
