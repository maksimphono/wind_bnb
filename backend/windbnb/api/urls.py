from django.urls import path
from django.conf.urls.static import static
from django.conf import settings
from . import views

urlpatterns = [
    path('', views.CardsCollection.as_view()),
    path('<int:pk>/', views.WindBnBCard.as_view())
] + static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)

