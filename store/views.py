from django.shortcuts import render
from store.forms import UserImage

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



