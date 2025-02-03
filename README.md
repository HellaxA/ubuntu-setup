#Instructions
##bash-script-exec
Used to execute scripts like installing default apps on naked ubuntu.
To execute command: ./run [startsWith() function of the script in /runs]
E.g. "./run nvi" - will run all scripts under /runs that start with 'nvi' 
use --dry flag to dry run it, it will output what commands it is going to use.

##cl-editing toold
Has useful-commands file which describes useful instruments for ubuntu to edit/extract text.
parrallel.test and file.txt are files to practice the instruments.

##dotfiles
Used to save all configs, binaries and dotfiles.
By running ./dev-env it is gonna rm if there same destination files and move the files to $HOME/[relative path]/[each file in this directory]
I specified them at the bottom of the dev-env script.
use --dry flag to dry run it, it will output what commands it is going to use.

##editor
Used mainly to explain possible features to install in your bash to help with development. 

All of this is inspired by the Primeagen.

