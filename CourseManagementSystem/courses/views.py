from django.shortcuts import render
from django.http import JsonResponse
from .models import Course

def course_list(request):
    courses = Course.objects.all()
    context = {'courses': courses}
    return render(request, 'courses/course_list.html', context)


from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import CourseSerializer

@api_view(['GET'])
def api_course_list(request):
    courses = Course.objects.all()
    serializer = CourseSerializer(courses, many=True)
    return Response(serializer.data)

