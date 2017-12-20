# myRetail Reactive Store Front

follow the instructions to run MyRetail website:

Prerequisite:
 - install `yarn` on your Node enviroment
    `npm install yarn -g`
 - make sure your Node version is at least >= 6.0

* On the root folder you want to start by:
  ```sh
   $ yarn install
  ```
* Once it is __done__ you should run the server to start your App
  ```sh
   $ yarn start
  ```
  this would start the app on `localhost:5050`

* If you want to start the __dev__ enviroment
  ```sh
   $ yarn dev
  ```
  This would start the __[webpack](https://webpack.github.io/)__ dev enviroment and you would be able to make changes to the code without restarting your server.

* To run the tests, use this command

  ```sh
   $ npm run tests
  ```

### Continuous Integration

There is a lot to do in this area. Since we use a node server we can deploy it into a container. Docker comes to mind.

There can also be a lot more tests written. I've wrote tests for the reducers that contains the business logic.

We could add githooks for PR merges and test/deploy the code at every step of the way.

Lastly we added linters as part of the build process to make sure the code quality is uniform.

  ```
  +---------------------+        +-----------------+          +------------------+
  |                     |  Tests |                 | QA Tests |                  |
  |  Dev Enviroment     +-------->    Staging      +---------->     Production   |
  |                     | GitHook|                 |          |                  |
  +---------------------+    &   +-----------------+          +------------------+
                          Linters
  ```

## License

MIT
