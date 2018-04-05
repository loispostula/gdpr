from rest_framework import viewsets, status

# Create your views here.
from rest_framework.decorators import action
from rest_framework.response import Response

from consent.models import Consent
from consent.serializers import ConsentSerializer


class ConsentViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = ConsentSerializer
    queryset = Consent.objects.all()

    @action(methods=['post'], detail=True)
    def give(self, request, pk=None):
        consent = self.get_object()
        user = request.user
        consent.users.add(user)
        serializer = self.get_serializer(consent)
        return Response(serializer.data,
                        status=status.HTTP_201_CREATED)

    @action(methods=['post'], detail=True)
    def remove(self, request, pk=None):
        consent = self.get_object()
        user = request.user
        consent.users.remove(user)
        serializer = self.get_serializer(consent)
        return Response(serializer.data,
                        status=status.HTTP_202_ACCEPTED)

