# DOJO INSTRUCTIONS
"is a safe environment where someone can practice new skills"
## Info

## Table of Content
1. [Simple Rails Blog](#simple-rails-blog-project)
2. [Simple JavaScript Project](#Simple-JavaScript-Project)
<!-- 3. [Ruby Plays Tennis]() -->
3. [Simple React App]()

# Simple Rails Blog Project
TDD for beginners can be a challenge particularly in understanding the logic to create that first test. Using spikes to learn how to create a feature and then write a test can help to support the learning process. Likewise digging around in a functioning environment can also be a great tool to help understand and application and write functional tests. The following instructions step through creating a simple rails blog project with learning to write and using this to drive development the focus. Using the "git worktree" feature and some basic rails scripts to create a working rails blog application creates a learning environment to help facilitate writing tests that can be transferred and used to drive TDD in a new rails project.

## Create a simple rails project framework :

```
rails new [rails_project_name] --database=postgresql --minimal --skip-test
```
Move into the folder generated
```
cd [rails_project_name]
git status
```
*remove the git init* when running the "rails new" script it will be set up up a git repo (ie do a git init) we want to remove this if the folder we working is already a git repo..

```
rm -rf .git
```
Run your rails program
```
rails server
```

*NOTE* If the postgresql database is not running error will appear when local host in browser id opened. To start the postgresql if you are using brew
```
brew services start postgresql
```

Create your database
 ```
 bin/rails db:create
 ```
## Adding rspec and capybara test framework

1. Add the following gems:
- **Gemfile**
```
#rspec and capybara test suite
  group :test do
    gem 'capybara'
    gem 'rspec-rails'
    gem 'capybara-inline-screenshot'
    gem 'selenium-webdriver'
    gem 'webdrivers'
    gem 'rspec-example_steps'
  end
```

2. run on command line
```
rails generate rspec:install
```
3. Add/ammend the following files:
- **spec/rails_helper.rb**
  - uncomment out on approx line 23
```
Dir[Rails.root.join('spec', 'support', '**', '*.rb')].sort.each { |f| require f }
```

- **spec/support/capybara.rb**
  - Create the following folder and file and add content to the capybara.rb file:
```
require 'capybara/rspec'
require 'capybara/rails'
require 'capybara-inline-screenshot/rspec'

Capybara.javascript_driver = :selenium_chrome

Capybara::Screenshot.register_driver(:selenium_chrome) do |driver, path|
  driver.browser.save_screenshot(path)
end
```
**At this point we have a basic empty rails application with a test framework created.**

# Create a exploration a blog environment to write a test

At this point we want to create a temporary copy of the project and create a simple blog. Having separate terminal windows/tabs open for the main branch and a separate on for the worktree will enable simple moving between the environments.
### Create a worktree
In new terminal window/tab remain in the [rails_project_name] folder
 ```
  git worktree add [blog-create-learning]
  cd [blog-create-learning]
```
there is now a worktree setup of the repo folder. Assess the [rails_project_name] folder on the blog-create-learning worktree branch.

Run the [blog-create-learning] "worktree" on another port:
```
bin/rails server --port 3030
```
### Create a simple blog with title and text
```
rails generate scaffold Article title:string text:text
bin/rails db:migrate
```
make a quick change so the landing page starts at the /articles....
- **config/routes.rb**
  - uncomment out line 6
```
  root "articles#index"
  ```
on the worktree we now have a functioning blog but no tests... use this environment to create a you first test. Explore the behaviour from landing page to create a new blog entry and generate a integration test....

When you have finished using the worktree environment it can be removed but a branch will still exist after running the remove command:
```
git worktree remove [blog-create-learning]
```
if the explore branch is not needed again:
```
git branch -d [blog-create-learning]
```

 ### Writing tests overview:

For the simple blog above, here is a starting point for a integration test that can be built upon and used as a starting point in your "naked" rails application.
Add the following file and content:
- **spec/features/create_a_blog_spec.rb**
```
require 'rails_helper'

feature 'creating blogs', js: true do
  scenario 'new user creates a blog post' do
    When "user visits the app" do
      visit root_path
    end

    Then "they see a new article link" do
      expect(page).to have_text('New article')
    end

    When "user clicks the link" do
      click_link('New article')
    end

    Then "user successfully navigates to a new blog entry" do
      expect(
        (page.current_url).last(13),
      ).to eq '/articles/new'
    end
  end
end
```

run the test on command line
```
rspec
```
You have a passing test  (starting point) that can be now applied to your "naked" project environment...


# Simple JavaScript Project
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
---
# Simple React To-Do-List Project
  - Create react app

```
create-react-app [project_folder_name]
```

  - run the project
  ```
    cd [project_folder_name]
    npm start
```

### Set up TDD environment

  - Setting Up the vitest environment with

```
    npm add --save-dev \
      vitest \
      @vitejs/plugin-react \
      @vitest/coverage-c8
```

  adding a vite config file links testing framework with react
```
  touch vite.config.js
```

- rename files for config application
  renamed any JSX files from .js to .jsx

- running vitest
```
  npm run test          # in watch mode
  npm run test -- --run # in non-watch mode
  npm run coverage
```


