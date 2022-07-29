# DOJO INSTRUCTIONS
"is a safe environment where someone can practice new skills"
## Set Up a simple JS project
Create the directory and npm environment
- On the cmd line:
```
mkdir [project name]
cd [project name]
npm init -y
```

**Adding and running Vitest**

Adding vitest
```
npm add --save-dev vitest
```
Open project in code editor:
- add the following into the package.json file "scrips" note: section  "tests" overwrite

```
  "scripts": {
    "test": "vitest",
    "coverage": "vitest run --coverage"
  },
```

Running Vitest
- On the cmd line:
```
npm run coverage
npm test
 ```

**Making test file**
- for each js file in the project a test file can be made using the following naming conventions:
```
touch [filename].js
touch [filename].test.js
```

**Create an executable file**
This will enable developer to run a js file on the command line.
- creating and adding content
```
cat > run.sh
```
a curser will appear and enter the following text:

```
#!/usr/bin/env node

console.log("hi");
```
To exit the edit mode press CTRL+D

**modify/edit** => console.log("hi"); with relevant js function(s)

- to check file mode (read/write/executable):
```
ls -l
```
the run.sh need to be be executable not just read! so to change the status:
```
chmod +x run.sh
```
- execute the run.sh:

```
./run.sh
```

### WRITE A SIMPLE TEST:

in the .test.js file follow the

<style>
r { color: Red }
o { color: Orange }
g { color: Green }
b { color: Blue}
</style>

- <r>Import functions:</r> from Vitest and from the js file(s) being tested
- <o>it statement:</o> What will the expected behaviour be?
- <g>Arrange/Act/Assert:</g> test focus' on independent, individual behaviours

**Example for hello world:**

---
    import { expect, it  from 'vitest';

    import { hello } from './hello.js';

    it('will say hello world with no name input', () => {

      const result = hello();

      expect(result).toBe('hello world');
    });

---


### PASS THE FAILING TEST:

note functions will need to be exported using the module.exports function.

**Example for hello world:**

---

```
function hello(){
  return 'hello world';
};

module.exports ={
  hello:hello
}
```
---

### EDIT THE EXECUTABLE
constants for functions need to be declared!
```
#!/usr/bin/env node

const { hello } = require('./hello');
console.log(hello());
```
