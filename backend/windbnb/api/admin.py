from django.contrib import admin

# Register your models here.
from .models import WindBnBCardModel, Image, Owner, Location

admin.site.register(WindBnBCardModel)
admin.site.register(Image)
admin.site.register(Owner)
admin.site.register(Location)