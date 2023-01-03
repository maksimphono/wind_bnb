from django.urls import path

from . import views

urlpatterns = [
    path('', views.CardsCollection.as_view()),
    path('<int:pk>/', views.WindBnBCard.as_view()),
    path("location=<int:location_id>", views.CardsCollection.as_view()),
    path("image/<int:img_id>/", views.ImageCollection.as_view()),
    path("owner/<int:pk>/", views.OwnerView.as_view()),
    path("locations", views.LocationsView.as_view()),
    path("crimg/<int:card_id>", views.createImages)
]