from django.db import models
from django.contrib.auth.models import User, Group

# Create your models here.
class Student(models.Model):
    StudentId = models.AutoField(primary_key=True)
    StudentName = models.CharField(max_length=100)
    StudentClass= models.IntegerField

#whenever you print an instance of this class or
#view it in the Django admin, it will display the dept name.
def __str__(self):
    return self.StudentName