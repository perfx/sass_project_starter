

## New sass project setup workflow

This workflow describes how to clone saas project starter from github and create new project within bitbucket. Github has great features for public repost collaboration while bitbucket has great free features for private repos.


1.	Make sure you have compass installed ( http://compass-style.org/install/ )
Clone sass project directory: 
		
		“git clone https://github.com/perfx/sass_project_starter.git new_project_name”

2.	Change your location to newly created directory:
		
		cd new_project_name

3.	Clean up git data:

		rm -rf .git

4.	Initiate git for you new project :
		
		git init

5.	Create Bitbucket project and add origin to you newly created one:
		
		git remote add origin https://username@bitbucket.org/username/new_project_name.git

6.	Add all files :
	
		git add -A

7.	Commit all files 
		
		git commit -am “initial commit”

8.	Push files

		git push -u origin master

Your good to go.


## Existing sass project setup workflow

If you want to add or change something in existing saas project follow these steps. Steps are based on checking out private repository from bitbucket.

1.	Clone existing project repository:

		git clone https://username@bitbucket.org/username/existin_project_name.git

2.	 Go to that directory

		cd exiting_project_name

3.	Compile project files with compass
		
		compass compile

4.	If you want compass to “watch”(recompile .sass files each time you make changes) your directory:

		compass watch


## Basic compass commands

-	Compile .sass files after you made changes
		
		compass compile

-	Make compass re-compile .sass files each time you make changes

		compass watch


## Basic git commands

-	Add all changes in project
		
		git add -A

-	Commit all added changes :

		git commit -am ”your commit comment here”

-	push all changes to remote repository

		git push


## General info about sass/compass based projects



You can configure compass project by altering info in config.rb files. These are ruby files and saas project starter contains couple of examples.

-	When launching project it's advisable to configure `config.rb` file to production mode:
	
		output_style 		= :nested
		environment 		= :development


		# output_style 		= :compressed
		# environment 		= :production


Some project may require susy ( http://susy.oddbird.net/ ) so you’ll need to install this gem. Please note if your using software like codekit or livereload to auto compile and reload your pages you’ll need to point to your compass file with newly added gem instead of the one the mentioned apps use.
