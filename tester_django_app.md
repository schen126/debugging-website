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

