========================================
Django Fiber starting point with Compass
========================================

Starting point for creating websites with Django Fiber.
For a more stripped-down version with Django Fiber take a look at https://github.com/ridethepony/django-fiber-example

Using:
======

* Django Fiber (0.9.6.5)
* MySQL python (1.2.3)
* South (0.7.3)
* Compass (0.12.alpha.0)
* Gridless boilerplate (2.0)
* jQuery (1.7.1)

Installation:
=============

::

	$ git clone git@github.com:nvandijk/django-fiber-starting-point.git
	$ cd django-fiber-starting-point
	$ pip install -r requirements.txt
	$ cp settings_example.py settings.py
	$ python manage.py syncdb --migrate
	$ python manage.py loaddata ./fixtures/example_initial_data.json
	$ python manage.py runserver 0:8000

Git hooks:
==========

::

	$ cd path/to/project
	$ ln -s ../../git_hooks/pre-commit .git/hooks/pre-commit
