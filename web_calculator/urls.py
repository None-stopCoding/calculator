from django.urls import path
from web_calculator import views

urlpatterns = [
    path('', views.input_exp, name='input'),
]
