from django.shortcuts import render
from rest_framework import generics
from django.http import JsonResponse
from django.core import serializers

from .createImages import *
from .models import WindBnBCardModel, Image, Owner, Location
from .serializers import WindBnBCardSerializer, ImageSerializer, OwnerSerializer, LocationSerializer

# Create your views here.

class CardsCollection(generics.ListCreateAPIView):
    def get_queryset(self):
        try:
            query = self.kwargs["location_id"]
        except KeyError:
            return WindBnBCardModel.objects.all()

        return WindBnBCardModel.objects.filter(location = query)

    serializer_class = WindBnBCardSerializer

class WindBnBCard(generics.RetrieveUpdateDestroyAPIView):
    queryset = WindBnBCardModel.objects.all()
    serializer_class = WindBnBCardSerializer

class ImageCollection(generics.ListCreateAPIView):
    def get_queryset(self):
        return Image.objects.filter(card=self.kwargs["img_id"])
    serializer_class = ImageSerializer

class OwnerView(generics.RetrieveUpdateDestroyAPIView):
    def get_queryset(self):
        return Owner.objects.all()
    serializer_class = OwnerSerializer

class LocationsView(generics.ListCreateAPIView):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer

def createImages(request, card_id):
    from PIL import Image as PIL_Image
    lst = []
    card = WindBnBCardModel.objects.filter(id=card_id).first()
    assetFolder = r"D:\Maksim\JavaScript\React\Project_11_wind_bnb\wind_bnb\backend\windbnb\images"
    imagePaths = getAllImagesPaths(assetFolder)

    for path, i in zip(imagePaths, range(len(imagePaths))):
        filename = f"card_{card_id}_image_{i}" + "." + getImageFormat(path)
        PIL_Image.open(path).copy().save(
            r"D:\Maksim\JavaScript\React\Project_11_wind_bnb\wind_bnb\backend\windbnb\media\pictures" + 
            "\\" + filename
        )
        newImage = Image(card = card, image = f"pictures\\{filename}")
        #lst += [getImageName(path)]
        newImage.save()

    #newImage.save()
    return JsonResponse({"data" : str(card.title)}, safe = False)