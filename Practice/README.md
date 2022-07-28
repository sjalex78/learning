### DOJO INSTRUCTIONS

### Make a simple JS project

```
mkdir [project name]
cd [project name]
npm init -y
```

**Vitest**

Adding
```
npm add --save-dev vitest
```

Running

- add the following into the package.json file "scrips" note: section  "tests" overwrite

```

  "scripts": {
    "test": "vitest",
    "coverage": "vitest run --coverage"
  },

```

```
npm run coverage
npm test
 ```

**Making test file**

- for each js file in the project a test file can be made:

```
touch [filename].js
touch [filename].test.js
```

**Create an executable file**

```
touch run.sh
```

to check file mode (read/write/executable):
```
ls -l
```

make the file executable not just read!:
```
chmod +x run.sh
```

add to the file:

#!/usr/bin/env node

Create a file with

```
cat > run.sh
#!/usr/bin/env node

console.log("hi");
```


run the file:
```
./run.sh
```