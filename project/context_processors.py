from django.conf import settings


def site_settings(context):
    return { 'site_settings': settings.SITE_SETTINGS }
