# Make this unique, and don't share it with anybody.
# Use this one-liner to generate a secret key:
# $ python -c 'import random; print "".join([random.choice("abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(-_=+)") for i in range(50)])'
SECRET_KEY = ''

EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'

SITE_SETTINGS['google_analytics_tracking_id'] = 'UA-XXXX-Y'
SITE_SETTINGS['google_analytics_domain'] = 'example.com'
