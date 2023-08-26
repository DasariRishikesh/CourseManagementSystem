from django.shortcuts import render
from django.http import JsonResponse
from .models import Course

def course_list(request):
    courses = Course.objects.all()
    context = {'courses': courses}
    return render(request, 'courses/course_list.html', context)

def api_course_list(request):
    courses = Course.objects.all()
    course_data = [{'title': course.title, 'instructor': course.instructor, 'description': course.description} for course in courses]
    return JsonResponse(course_data, safe=False)
