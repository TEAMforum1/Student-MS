from rest_framework import serializers
from .models import Student
from django.contrib.auth.models import User

class StudentSerializer(serializers.ModelSerializer):
    class Meta: #provide meta data to model class
        model = Student
        fields = '__all__'

