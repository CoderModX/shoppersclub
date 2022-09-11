from django.db import models

# Create your models here.

class Cloth(models.Model):
    name = models.CharField(max_length=50)
    hotel_Main_Img = models.ImageField(upload_to='images/')