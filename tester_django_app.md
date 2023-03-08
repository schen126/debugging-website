## How to Write a [Basic Django App](https://docs.djangoproject.com/en/4.1/intro/tutorial01/)
Here are the instructions for a public site that lets people view and vote in polls.

1) Check that Django is installed with `python3 -m django --version`
>> If you have python1 or python2, the first word of the command may be changed

![image](https://user-images.githubusercontent.com/86854157/223861200-0b1b0fe9-9b85-4102-bfd8-294001007f5a.png)

2) Log into your virtual environment with `source tutorial-env/bin/activate`
![image](https://user-images.githubusercontent.com/86854157/223862482-b1267ea4-ac0b-4853-ad63-18526d1ae05d.png)


3) Create a project with `django-admin startproject mysite` after `cd`ing into your chosen directory
>> This will create a mysite directory in the current directory.
>> If it didn't work, check this [here](https://docs.djangoproject.com/en/4.1/faq/troubleshooting/#troubleshooting-django-admin)
![image](https://user-images.githubusercontent.com/86854157/223862555-2998bb4c-be02-4905-8eed-53af46b40518.png)
![image](https://user-images.githubusercontent.com/86854157/223863158-76056175-4998-46e0-b2d2-29bd15a0dc1d.png)

The structure of `mysite` is like so:
![image](https://user-images.githubusercontent.com/86854157/223863240-d8a9c3b4-da97-451a-aec0-776b41be892e.png)

* The outer `mysite/` directory is the container for the project
* `manage.py` lets you interact with the django project
* The inner `mysite/` directory is the Python package for the project
* `mysite/__init__.py` tells Python that this directory should be considered a Python package
* `mysite/settings.py` contain [settings and configurations](https://docs.djangoproject.com/en/4.1/topics/settings/) for this Django project
* `mysite/urls.py` contain the URL declarations for the Django project, which acts like a "table of contents" for the site
* `mysite/asgi.py` is an entry point for ASGI-compatible web servers to your project
* `mysite/wsgi.py` is an entry point for WSGI-compatible web servers to your project

4) Verify that the Django projects works using `python manage.py runserver` in the outer `mysite` directory
![image](https://user-images.githubusercontent.com/86854157/223864209-8660c800-4784-4eae-bfb1-b3f10280da57.png)
>> Now the webserver works! You can visit the link (http://127.0.0.1:8000/ in this case) to run it.

![image](https://user-images.githubusercontent.com/86854157/223864420-36a2697d-dc58-45c1-9db1-ed4024feb8f8.png)
>> To change the port, do `python3 manage.py runserver [port number]`
>> To change the IP, do `python3 manage.py runserver [IP]`

5) Now that you've successfully created a project, create the poll app in the same directory as `manage.py` with `python3 manage.py startapp polls`
![image](https://user-images.githubusercontent.com/86854157/223864910-fb3c8801-31fe-4afa-8275-27268dd7631e.png)

6) Open the file `polls/views.py` with your editor of choice
* To use VIM, do `vim views.py` and use `:wq` to quit
* To use GNU nano, do `nano views.py` and use `Ctrl+X` to quit
![image](https://user-images.githubusercontent.com/86854157/223866793-7a579943-2505-4047-a32f-ae5620088f6a.png)
![image](https://user-images.githubusercontent.com/86854157/223866176-3a80e50e-fda6-4f60-8244-4e06d34bd2b0.png)

7) Type the following code:
```
from django.http import HttpResponse

def index(request):
  return HttpResponse("Hello, world. You're at the polls index.")
```
![image](https://user-images.githubusercontent.com/86854157/223866600-5e7dacb0-a549-416d-bfc5-3358c4face08.png)
>> Make sure to save with `Ctrl+o`

8) To call the views, create a file called `urls.py` in the `polls/` directory. Include the following code:
```
from django.urls import path

from . import views

urlpatterns = [
  path('', views.index, name='index'),
]
```
![image](https://user-images.githubusercontent.com/86854157/223867329-f7b9bb40-fc37-49ab-822a-b54dfe4de5f1.png)
![image](https://user-images.githubusercontent.com/86854157/223867406-ae66a969-e9a6-486f-beb1-5164292e6e45.png)

8) Create a file called `urls.py` in the `mysite` directory. Add an import for `django.urls.include` and insert an `include` in the `urlpatterns` list in the `urls.py` code.
>> `include()` allows referencing to other URLconfs. When Django encounters `include()`, it chops off whatever part of the URL matched up to that point and sends the remaining string to the included URL conf for further processing. This allows for plug-and-pay URLs, which are easily modified.

The code should be like so:
```
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
  path('polls/', include('polls.urls')),
  path('admin/', admin.site.urls),
]
```
![image](https://user-images.githubusercontent.com/86854157/223868337-b4746aa2-f812-425c-b6c4-0056059930e9.png)
![image](https://user-images.githubusercontent.com/86854157/223868382-b5a277d6-8e44-4d24-b468-f7b3bd599892.png)

8) Access the site with `python manage.py runserver` and go to `http://localhost:8000/polls/` in your browser

>>THIS STEP DOES NOT WORK RN
![image](https://user-images.githubusercontent.com/86854157/223869602-576c13b9-ae1b-4509-be5f-b5eaf52a2b92.png)
![image](https://user-images.githubusercontent.com/86854157/223869547-eb56dd76-ce0e-4ca7-a01f-4202ca206ee7.png)
