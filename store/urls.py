from django.urls import include,path
from . import views
urlpatterns = [
    path('', views.index, name='index'),
    path('about/', views.about, name='about'),
    path('contact/', views.contact, name='contact'),
    path('login/', views.login, name='login'),
    path('signup/', views.signup, name='signup'),
    path('products/', views.products, name='products'),
    path('uploadimage/', views.vr, name='uploadimage'),
    path('vr/', views.image_request, name = "image-request")  
]
