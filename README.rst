========================================
Django Fiber starting point with Compass
========================================

Starting point for creating websites with Django Fiber.

Using:
======

* Django Fiber (0.9.5)
* Gridless boilerplate (2.0)
* Compass (0.12.alpha.0)
* jQuery (1.6.4)
* South (0.7.3)

Installation:
=============

::

	$ git clone git@github.com:dbunskoek/django-fiber-starting-point.git
	$ cd django-fiber-starting-point
	$ pip install -r requirements.txt
	$ cp settings_example.py settings.py
	$ python manage.py syncdb --migrate
	$ python manage.py loaddata ./fixtures/example_initial_data.json
	$ python manage.py runserver 0:8000

Git hooks:
==========

::

	$ ln -s ../../git_hooks/pre-commit .git/hooks/pre-commit
