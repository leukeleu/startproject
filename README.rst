============
Startproject
============

Startproject is a starting point for creating websites with Django Fiber.

Using:
======

* Django (1.4.1)
* Django Fiber (0.9.8.5)
* MySQL python (1.2.3)
* South (0.7.5)
* Compass (0.12.2)
* Guard (1.3.2)
* Guard Compass (0.0.6)
* Guard LiveReload (1.0)
* Normalize (2.0.1)
* jQuery (1.8)

Installation:
=============

::

	$ git clone git@github.com:leukeleu/startproject.git
	$ cd startproject
	$ pip install -r requirements.txt
	$ cp startproject/settings_example.py startproject/settings.py
	$ python manage.py syncdb --migrate
	$ python manage.py loaddata ./fixtures/example_initial_data.json
	$ python manage.py runserver 0:8000

Git hooks:
==========

Git pre-commit hook for compiling clean .css files.

::

    #!/bin/sh

    compass compile --force --config config_clean_css.rb
    git add *.css
