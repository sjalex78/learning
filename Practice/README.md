# DOJO INSTRUCTIONS
"is a safe environment where someone can practice new skills"
## Info

## Table of Content
1. [Simple Rails Blog](#simple-rails-blog)
2. [Simple JavaScript Project](#Simple-JavaScript-Project)

## Simple Rails Blog

Create a simple rails project this will generate the the folder remove tests and set up a db
```
rails new rails_20220801_practice --database=postgresql --minimal --skip-test
```
Move into the folder generated
```
cd rails_20220801_practice
```
git status
rails new will ste up a git repo (ie do a git init) we want to remove this if the folder we are in is git repo already...

```
rm -rf .git
```
Run your rails program to dafault
```
rails server
```
  NOTE If postgress database is not running
 3620  brew services list
 3621  brew services start postgresql

 Create your database
 ```
 bin/rails db:create
 ```
### Create a test environment


 ### Create a blog on a tree
```
rails generate scaffold Article title:string text:text
bin/rails db:migrate
```
 bin/rails db:rollback
 3628  git status
 3629  git add .
 3630  git stash
 3631  git status
 3632  git stash show -p config/routes
 3633  git stash show -p
 3634  git worktree
 3635  git worktree add -h
 3636  git status
 3637  git worktree add -b spike-blog
 3638  git worktree add -b spike-blog .
 3639  cd ../../
 3640  git status
 3641  git worktree add Practice/rails_20220801_practice
 3642  git worktree add Practice/rails_20220801_practice-spike
 3643  ls
 3644  find Practice
 3645  cd Practice/rails_20220801_practice
 3646  cd ..
 3647  ls
 3648  git status
 3649  ls rails_20220801_practice-spike
 3650  cd rails_20220801_practice-spike/Practice/rails_20220801_practice
 3651  git stash pop
 3652  git status
 3653  bin/rails server --port 3030
 3654  code .
 3655  git worktree list

 - create test environment
 -
 - create a blog


## Simple JavaScript Project
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
