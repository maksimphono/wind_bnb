from rest_framework import serializers

from .models import WindBnBCardModel

class WindBnBCardSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            "id",
            "title",
            "preview_image",
            "adress",
            "starsRate",
            "priceForNight",
            "description",
            "owner",
            "freewifi",
            "nocancelationfee",
            "securitysystems"
        )
        model = WindBnBCardModel