from django.db import models

# Create your models here.

class WindBnBCardModel(models.Model):
    title = models.CharField(max_length = 100)
    description = models.TextField()
    isSuperhost = models.BooleanField(default = False)
    
    freewifi = models.BooleanField(default = False)
    nocancelationfee = models.BooleanField(default = False)
    securitysystems = models.BooleanField(default = False)

    owner = models.CharField(max_length = 19, default = "")

    def __str__(self):
        return self.title

