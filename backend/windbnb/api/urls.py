from django.urls import path

from . import views

urlpatterns = [
    path('', views.CardsCollection.as_view()),
    path('<int:pk>/', views.WindBnBCard.as_view()),
    path("location/<str:location>", views.CardsCollection.as_view()),
    path("image/<int:img_id>/", views.ImageCollection.as_view()),
]