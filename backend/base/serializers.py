from logging import getLogger

from django.contrib.auth.password_validation import validate_password as django_validate_password
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from rest_framework_jwt.settings import api_settings

from .models import User


logger = getLogger(__name__)


class UserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
      required=True,
      validators=[UniqueValidator(queryset=User.objects.all())]
    )
    password = serializers.CharField(write_only=True)
    token = serializers.SerializerMethodField()

    def validate_password(self, value):
        django_validate_password(value)
        return value

    def get_token(self, obj):
      jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
      jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

      payload = jwt_payload_handler(obj)
      token = jwt_encode_handler(payload)
      return token

    def create(self, validated_data):
        user = User.objects.create(email=validated_data['email'])
        user.set_password(validated_data['password'])
        user.save()
        return user

    class Meta:
        model = User
        fields = ['id', 'email', 'password', 'token', ]

