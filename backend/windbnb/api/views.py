from django.shortcuts import render
from rest_framework import generics

from .models import WindBnBCardModel, Image, Owner
from .serializers import WindBnBCardSerializer, ImageSerializer, OwnerSerializer

# Create your views here.

class CardsCollection(generics.ListCreateAPIView):
    def get_queryset(self):
        try:
            query = self.kwargs["location"]
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