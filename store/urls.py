from django.urls import include,path
from . import views
urlpatterns = [
    path('', views.index, name='index'),
    path('about/', views.about, name='about'),
    path('contact/', views.contact, name='contact'),
    path('login/', views.login, name='login'),
    path('signup/', views.signup, name='signup'),
    path('products/', views.products, name='products'),
    path('uploadimage/', views.uploadimage, name='uploadimage'),
    path('success', views.success, name = 'success'),
]
