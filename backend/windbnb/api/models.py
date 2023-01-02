from django.db import models

# Create your models here.

class Location(models.Model):
    city = models.CharField(max_length=20)
    country = models.CharField(max_length=20, null = True, blank = True)

    def __str__(self):
        return self.city + "," + self.country

class Owner(models.Model):
    name = models.CharField(max_length=20)
    avatar = models.ImageField(upload_to="avatars", blank = True, null = True, default="avatars/default_avatar.png")

    def __str__(self):
        return self.name

class WindBnBCardModel(models.Model):
    title = models.CharField(max_length = 100)
    description = models.TextField()
    adress = models.TextField(default = "")
    starsRate = models.FloatField(default = 0, max_length = 255)
    priceForNight = models.IntegerField(default = 0)
    isSuperhost = models.BooleanField(default = False)

    freewifi = models.BooleanField(default = False)
    nocancelationfee = models.BooleanField(default = False)
    securitysystems = models.BooleanField(default = False)

    location = models.ForeignKey(Location, blank = True, null = True, on_delete=models.CASCADE)

    preview_image = models.ImageField(upload_to="pictures", default = "media/pictures/default_house.png")

    # will design models relationship later
    owner = models.OneToOneField(Owner, on_delete=models.CASCADE)

    def __str__(self):
        return self.title

class Image(models.Model) :
    card = models.ForeignKey(WindBnBCardModel, on_delete=models.CASCADE)
    image = models.ImageField(upload_to="pictures", default = "media/pictures/default_house.png")
