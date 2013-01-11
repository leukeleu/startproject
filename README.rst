============
Startproject
============

Startproject is a starting point for creating websites with Django Fiber.

Using:
======

* Django (1.4.3)
* Django Fiber (0.10)
* MySQL python (1.2.3)
* South (0.7.6)
* Normalize (2.0.1)
* jQuery (1.8.3)
* Modernizr (2.6.2)

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


Rename:
-------

When renaming the project, don't forget to replace 'startproject' with the project name in:

* manage.py
* startproject/settings_default.py
* startproject/wsgi.py


Development dependencies:
=========================

::

    $ gem install compass chunky_png guard guard-compass guard-livereload
