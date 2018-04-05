# Generated by Django 2.0.4 on 2018-04-05 15:41

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Consent',
            fields=[
                ('key', models.SlugField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=125)),
                ('description', models.TextField()),
                ('users', models.ManyToManyField(related_name='consents', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
