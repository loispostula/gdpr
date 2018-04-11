from rest_framework.mixins import CreateModelMixin
from rest_framework.permissions import AllowAny
from rest_framework.viewsets import GenericViewSet

from .models import User
from .serializers import UserSerializer


class RegisterViewSet(CreateModelMixin, GenericViewSet):
    model = User
    permission_classes = [AllowAny, ]
    serializer_class = UserSerializer
