# i18n-character-count

Very simple node character counter for counting up characters in an i18n system that is based 
on js objects in js files. This is very rudimentary and might break easily.

### How to run

npm run count *myFilePaths* [-- -e *excludeFileNames*]

replace *myFilePaths* with any number of paths to files or directories. 

If a directory is given, all files inside that directory will be parsed.
To exclude certain files, add the **-e** flag. Don't forget **--**. 
