from django.shortcuts import render
from rest_framework import generics

from .models import WindBnBCardModel
from .serializers import WindBnBCardSerializer

# Create your views here.

class CardsCollection(generics.ListCreateAPIView):
    queryset = WindBnBCardModel.objects.all()
    serializer_class = WindBnBCardSerializer

class WindBnBCard(generics.RetrieveUpdateDestroyAPIView):
    queryset = WindBnBCardModel.objects.all()
    serializer_class = WindBnBCardSerializer