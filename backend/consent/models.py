from django.db import models

from base.models import User


class Consent(models.Model):
    """
    This represent which consent we wan't to obtain from the users
    """
    key = models.SlugField(
        primary_key=True
    )
    title = models.CharField(
        max_length=125
    )
    description = models.TextField(

    )
    users = models.ManyToManyField(
        User,
        related_name='consents'
    )


