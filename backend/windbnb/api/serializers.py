from rest_framework import serializers

from .models import WindBnBCardModel, Image

class WindBnBCardSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            "id",
            "title",
            "preview_image",
            "location",
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

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            "image",
            "card"
        )
        model = Image