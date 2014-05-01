# Startproject

Startproject is a starting point for creating websites with Django Fiber.

## Using:

* Django (1.6.2)
* Django Fiber (0.13)
* psycopg2 (2.5.2)
* South (0.8.4)
* Normalize (3.0.1)
* jQuery (2.1.0)
* Modernizr (2.7.1)

## Installation:

	$ git clone git@github.com:leukeleu/startproject.git
	$ cd startproject
	$ pip install -r requirements.txt
	$ cp startproject/settings_example.py startproject/settings.py
	$ python manage.py syncdb --migrate
	$ python manage.py loaddata ./fixtures/example_initial_data.json
	$ python manage.py runserver 0:8000


## Rename:

When renaming the project, don't forget to replace 'startproject' with the project name in:

* manage.py
* startproject/settings_default.py
* startproject/wsgi.py
* startproject (directory)


## Generate a secret key:

`SECRET_KEY` is set to an empty string in `startproject/settings_example.py`

For production generate a new secret key with the following one-liner and use the result as value for `SECRET_KEY`:

	$ python -c 'import random; print "".join([random.choice("abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(-_=+)") for i in range(50)])'


## Development dependencies:

    $ gem install compass oily_png guard guard-compass guard-livereload

The next steps require node.js (<http://nodejs.org/>).
Install node packages / gulp dependencies:

    $ npm install

Install gulp as a global node.js package

	$ npm install -g gulp

To execute livereload / compass

	$ gulp dev
	
*Note*: currently livereload only works when DEBUG=True

