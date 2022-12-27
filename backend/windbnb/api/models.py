from django.db import models

# Create your models here.

<<<<<<< HEAD
class Location(models.Model):
    country = models.CharField(max_length = 255)
    city = models.CharField(max_length = 255)

    def __str__(self):
        return self.country + ", " + self.city

=======
>>>>>>> 903435210e5c955cae685c8cf2682bde41ee474e
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

<<<<<<< HEAD
    location = models.ForeignKey(Location, on_delete = models.CASCADE, default = 0)

=======
>>>>>>> 903435210e5c955cae685c8cf2682bde41ee474e
    preview_image = models.ImageField(upload_to="pictures", default = "media/pictures/default_house.png")

    # will design models relationship later
    owner = models.CharField(max_length = 19, default = "")

    def __str__(self):
        return self.title

class Image(models.Model) :
    card = models.ForeignKey(WindBnBCardModel, on_delete=models.CASCADE)
    image = models.ImageField(upload_to="pictures", default = "media/pictures/default_house.png")
