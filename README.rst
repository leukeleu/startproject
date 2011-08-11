============================
Django Fiber example project
============================

Installation:
=============

::

	$ git clone git://github.com/ridethepony/django-fiber-example.git
	$ cd django-fiber-example
	$ pip install -r requirements.txt
	$ cp settings_example.py settings.py
	$ python manage.py syncdb
	$ python manage.py loaddata ./fixtures/example_initial_data.json
	$ python manage.py runserver 0:8000
