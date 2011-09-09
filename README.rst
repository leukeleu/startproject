============================
Django Fiber example project
============================

Start point for working with Django Fiber.

Using:
======

* Gridless boilerplate (2.0)
* jQuery (1.6.3)

Installation:
=============

::

	$ git clone git@github.com:nvandijk/django-fiber-example.git
	$ cd django-fiber-example
	$ pip install -r requirements.txt
	$ cp settings_example.py settings.py
	$ python manage.py syncdb
	$ python manage.py loaddata ./fixtures/example_initial_data.json
	$ python manage.py runserver 0:8000
