# Brick-Boilerplate

> A [Brick](https://github.com/mozilla/brick/) custom element starter-kit.

## Demo

[Check it live!](http://my-user.github.io/my-repo)

## Usage

1. Import Web Components polyfill:

    ```html
    <script src="bower_components/platform/platform.js"></script>
    ```

2. Import Custom Element:

    ```html
    <link rel="import" href="src/element.html">
    ```

3. Start using it:

    ```html
    <custom-element></custom-element>
    ```

## Options

Attribute     | Options     | Default      | Description
---           | ---         | ---          | ---
`foo`         | *string*    | `bar`        | An Attribute.

## Methods

Method        | Parameters   | Returns     | Description
---           | ---          | ---         | ---
`method()`    | None.        | Nothing.    | A method.

## Events

Event         | Description
---           | ---
`onsomething` | Triggers when something happens.

## Development

In order to run it locally you'll need to fetch some dependencies and a basic server setup.

* Install [Bower](http://bower.io/) & [Gulp](http://gulpjs.com/):

    ```sh
    $ [sudo] npm install -g bower gulp
    ```

* Install local dependencies:

    ```sh
    $ bower install && npm install
    ```

* To test your project, start the development server and open `http://localhost:3001`.

    ```sh
    $ gulp server
    ```

* To build your css and lint your scripts.

    ```sh
    $ gulp build
    ```

* To provide a live demo, send everything to `gh-pages` branch.

    ```sh
    $ gulp deploy
    ```

## License

[MIT License](http://opensource.org/licenses/MIT)
