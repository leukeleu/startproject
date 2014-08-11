# Copy this file to settings.py.
from settings_default import *

DEBUG = True
TEMPLATE_DEBUG = DEBUG

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'd-name',
        'USER': 'd-user',
        'PASSWORD': 'password',
        'HOST': '',
        'PORT': '',
    }
}
