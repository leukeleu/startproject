# Copy this file to settings.py.
from settings_default import *

DEBUG = True
TEMPLATE_DEBUG = DEBUG

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'd-name',
        'USER': 'd-user',
        'PASSWORD': 'password',
        'HOST': '',
        'PORT': '',
        'STORAGE_ENGINE': 'MyISAM',
        'OPTIONS': {
            'init_command': 'SET storage_engine=MyISAM',
        },
    }
}

EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
