1. run ng generate config karma to generate the karma config file
2. open `karma.config.js`
3. check the following lines. Add check key like below:
    ```coverageReporter: {
        dir: require('path').join(__dirname, './coverage/<project-name>'),
        subdir: '.',
        reporters: [
            { type: 'html' },
            { type: 'text-summary' }
        ],
        check: {
            global: {
                statements: 80,
                branches: 80,
                functions: 80,
                lines: 80
            }
        }
    }```
4. In `package.json` file create another script `"test-coverage"` and add the following
5. `"test-coverage": "ng test --no-watch --code-coverage"`
6. run npm run `test-coverage` to check the coverage in cli
7. once you run the cmd you should see `coverage` folder created in the root
8. open the folder and run the `index.html` in browser to see the visual report