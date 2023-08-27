# courses/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('course-list/', views.course_list, name='course-list'),
    path('api/course-list/', views.api_course_list, name='api-course-list'),
]
