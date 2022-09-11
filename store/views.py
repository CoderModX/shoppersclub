from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import render, redirect
from .forms import *

# Create your views here.

def index(request):
    return render(request, "store/index.html")

def about(request):
    return render(request, "store/about.html")

def contact(request):
    return render(request, "store/contact.html")

def products(request):
    return render(request, "store/products.html")

def login(request):
    return render(request, "store/login.html")

def signup(request):
    return render(request, "store/signup.html")

def vr(request,):
    return render(request,"store/uploadpage.html")

def uploadimage(request):
  
    if request.method == 'POST':
        form = ClothForm(request.POST, request.FILES)
  
        if form.is_valid():
            form.save()
            return redirect('success')
    else:
        form = ClothForm()
    return render(request, 'store/uploadpage.html', {'form' : form})
  
  
def success(request):
    return HttpResponse('successfully uploaded')

