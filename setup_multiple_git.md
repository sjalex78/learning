## Creating as script to modify the .gitconfig file
The following are instruction for create a script to quickly change from a personal github config to your professional github config.

Specific to my local environment github configs use the following file:

-  ~/.gitconfig
```
[init]
 defaultBranch = main
[user]
 name = ***insert Name***
 email = ***insert github email address***

[pull]
 rebase = true
[credential]
 username = *** github user name ***
```

- ~/.ssh/config
```
# Define key to use for github
Host github.com
   HostName github.com
   User git
   IdentityFile ***SSH Key file for specific github profile ****

```


### Creating scripts
  ***change from work to personal***
  - change the github email
sed -i .old "s/[work github email]/[personal github email]/" ~/.gitconfig

  - modify the github user name
sed -i .old "s/username \= [personal github username]/username \= [work github username]/" ~/.gitconfig

  - change the ssh file path direction
sed -i .old "s/IdentityFile \~\/.ssh\/[personal ssh config file name]/IdentityFile \~\/.ssh\/[work ssh config file name]/" ~/.ssh/config


script explanation:
[-i = edit the source file directly]

the script for transforming from work to personal simply changes the order of the "work" & "personal" entities in the script.

### Storing and creating executable commands

The scripts to be stored in a bin directory (in the root directory) with a file named github_switch_work & github_switch_personal
 **create folder and files to store the scripts**
```
mkdir bin
cd bin
touch github_switch_work
touch github_switch_personal
```
eg: github_switch_work
```
#!/usr/bin

sed -i .old "s/[WORK GITHUB EMAIL]/[PERSONAL GITHUB EMAIL]/" ~/.gitconfig

sed -i .old "s/IdentityFile \~\/.ssh\/[PERSONAL SSH CONFIG FILE NAME]/IdentityFile \~\/.ssh\/[WORK SSH CONFIG FILE NAME]/" ~/.ssh/config

sed -i .old "s/username \= [PERSONAL GITHUB USERNAME]/username \= [WORK GITHUB USERNAME]/" ~/.gitconfig
```

repeat a similar code input for github_switch_personal

**make all files in bin folder executable**
move to bin directory
```
ls -l
chmod +x *
ls -l
``
These files can now be executed on the command line
```
Now on the command line change to your personal github
```
github_switch_personal
```
Now on the command line change to your work github
```
github_switch_work
```


### Creating a visual to see which github account is in use
**Add to "ohmyzsh" config file**

open
~/.zshrc file

and add
```
RPROMPT='%(?.%F{green}$(github_user)'
```
Then add github_user file to bin folder and add the following script
```
grep username ~/.gitconfig | awk '{print $3}'
```
make the file executable
```
chmod +x ~/bin/github_user
```
Now you will see the username to the right hand side of the terminal.
