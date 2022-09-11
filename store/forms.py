from django import forms
from .models import *
  
class ClothForm(forms.ModelForm):
  
    class Meta:
        model = Cloth
        fields = ['name']