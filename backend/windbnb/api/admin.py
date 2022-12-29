from django.contrib import admin

# Register your models here.
from .models import WindBnBCardModel, Image, Owner

admin.site.register(WindBnBCardModel)
admin.site.register(Image)
admin.site.register(Owner)