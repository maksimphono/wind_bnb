from django.contrib import admin

# Register your models here.
from .models import WindBnBCardModel, Image

admin.site.register(WindBnBCardModel)
admin.site.register(Image)