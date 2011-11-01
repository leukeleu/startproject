===========================
Django Fiber starting point
===========================

Starting point for creating websites with Django Fiber.

Using:
======

* Django Fiber (0.9.4.16)
* Gridless boilerplate (2.0)
* jQuery (1.6.4)

Installation:
=============

::

	$ git clone git@github.com:nvandijk/django-fiber-starting-point.git
	$ cd django-fiber-starting-point
	$ pip install -r requirements.txt
	$ cp settings_example.py settings.py
	$ python manage.py syncdb
	$ python manage.py loaddata ./fixtures/example_initial_data.json
	$ python manage.py runserver 0:8000
