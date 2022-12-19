from rest_framework import serializers

from .models import WindBnBCardModel

class WindBnBCardSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            "id",
            "title",
            "desc"
        )
        model = WindBnBCardModel