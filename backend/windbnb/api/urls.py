from django.urls import path
from . import views

urlpatterns = [
    path('', views.CardsCollection.as_view()),
    path('<int:pk>/', views.WindBnBCard.as_view())
]