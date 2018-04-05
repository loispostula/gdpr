from logging import getLogger

from rest_framework import serializers
from consent.models import Consent


logger = getLogger(__name__)


class ConsentSerializer(serializers.ModelSerializer):
    given = serializers.SerializerMethodField()

    def get_given(self, obj):
        request = self.context.get("request")
        if not request or not hasattr(request, "user"):
            return False
        user = request.user
        if not user:
            return False
        return obj.users.filter(id=user.id).exists()

    class Meta:
        model = Consent
        fields = ['key', 'title', 'description', 'given', ]
