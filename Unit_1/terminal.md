# The Terminal

The terminal is how we interact with our computer and its directories (folders) and files.

It is a CLI: Command Line Interfac4, a text based interface to the computer. 

We can type commands, manipulate files, execute programs, or open documents. More powerful and fast than a GUI.

(GUI is a Graphical User Interface using icons, menus, and windows for us to interact with in a visual way.)

<hr />

## Terminal Commands

- Print Working Directory 
    - `pwd`
    - Shows the name of the current directory, prints the full directory file path
- List Directory 
    - `ls`
    - shows the content of the current directory, shows all the folders and/or files at the current directory path
- Make Directory
    - `mkdir`
    - creates a new directory inside the current one, aka makes a new folder 
- Touch or New Item 
    - `touch fileName.fileType`
    - `ni fileName.fileType`
    - creates a new file at the current directory path
- Change Directory 
   - `cd`
   - move into a different directory 
    - to move forward: `cd fileorFolderName`
    - to move backwards: `cd ..`
- Clear
    - `clear` or `cls`
    - clears the terminal

<hr/>

## Other Terminal Commands:

- Copy File 
    - `cp`
    - copies a file, ex: `cp index.html copIndex.html`
- Move File
    - `mv`
    - moves a file, ex `mv index.html ./newFolderPath`
- Help
    - `help`
    - provides a list of commands and/or opens a help menu
- Remove Here 
    - `rm -r` or `rmdir`
    - removes files/folders, warning: these cannot be recovered as files permanently get deleted and not sent to the recycle bin
    - `rm -r` removes a directory's contents (all/any folders and file it contains), `rmdir` removes an empty directory/folder

<hr/>

### Other things to note:

- In the terminal a file path divides parent and child folder and files with a forward slash: /

- ex: desktop/PTSB_Jan_2023/Lecture/Unit_1/terminal.md

    - desktop
        - PTSB_Jan_2023
         - Lecture
             - Unit_1
                - terminal.md

- Using the tab key can help us finish a folder or file name we are typing out. 

- We do need to type file /folder names exactly 

- How to stop the terminal from running:
    - Use `ctrl+c` or `cmd+c` and enter/return
    - stops the terminal from running something and/or exits what's running/a menu, appears in the terminal as `^C`

- On Mac `sudo` may need to be used before commands where we need to elevate from user to admin privileges 
    - a password field will appear and your user computer password needs to be entered

