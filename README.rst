===========================
Django Fiber starting point
===========================

Starting point for creating websites with Django Fiber.
For a more stripped-down version with Django Fiber take a look at https://github.com/ridethepony/django-fiber-example

Using:
======

* Django (1.4.1)
* Django Fiber (0.9.7.2)
* MySQL python (1.2.3)
* South (0.7.5)
* Compass (0.12.2)
* Normalize (2.0.1)
* jQuery (1.7.2)

Installation:
=============

::

	$ git clone git@github.com:nvandijk/django-fiber-starting-point.git
	$ cd django-fiber-starting-point/src
	$ pip install -r requirements.txt
	$ cp settings_example.py settings.py
	$ python manage.py syncdb --migrate
	$ python manage.py loaddata ./fixtures/example_initial_data.json
	$ python manage.py runserver 0:8000

Git hooks:
==========

Git pre-commit hook for compiling clean .css files.

::

    #!/bin/sh

    compass compile src --force --config src/config_clean_css.rb
    git add *.css
