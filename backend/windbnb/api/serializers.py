from rest_framework import serializers

from .models import WindBnBCardModel

class WindBnBCardSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            "id",
            "title",
            "description",
            "owner",
            "freewifi",
            "nocancelationfee",
            "securitysystems"
        )
        model = WindBnBCardModel