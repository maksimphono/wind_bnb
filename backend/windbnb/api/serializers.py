from rest_framework import serializers

from .models import WindBnBCardModel, Image, Owner, Location

class WindBnBCardSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            "id",
            "title",
            "isSuperhost",
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
            "card",
            "id"
        )
        model = Image
    
class OwnerSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            "id",
            "avatar",
            "name"
        )
        model = Owner

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            "id",
            "city",
            "country"
        )
        model = Location