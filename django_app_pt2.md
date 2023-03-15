## How to Write a Basic Django App (Pt. 2)
Here is the continuation of [how to build a basic public site with Django](https://schen126.github.io/debugging-website/tester_django_app.html).

1. Log into your virtual environment with `source tutorial-env/bin/activate`.
>> If you're on Visual Studio Code, you can create a new Ubuntu terminal and login from there.

![image](https://user-images.githubusercontent.com/86854157/225447745-3f5e9e0d-2e81-44d2-95c3-d7f6829eb316.png)

2. Access the site with `python manage.py runserver` and go to http://localhost:8000/polls/ in your browser (from the previous part)
![image](https://user-images.githubusercontent.com/86854157/225448582-bfc84f10-a063-4e15-8005-b9bdad2d4d7f.png)

3. Open up `mysite/mysite/settings.py` with `code settings.py`
![image](https://user-images.githubusercontent.com/86854157/225450125-f427040e-e5c5-4ecc-9dcf-6a386754cb76.png)

This module has variables that represents Django settings.

4. To create a table in the database, use `python manage.py migrate`

This command creates necessary database tables.
![image](https://user-images.githubusercontent.com/86854157/225451201-50518f36-381a-4d87-a091-a5fca90d83ae.png)

5. Define a model

A model is basically the layout of your database. In this example, we'll create two models: **Question** has a question and a publication date, and **Choice** has the text of the choice and a vote tally. Every **Choice** is associated with a **Question**.
Edit `polls/models.py` so it has the following code:
```
from django.db import models


class Question(models.Model):
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')


class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)
```
![image](https://user-images.githubusercontent.com/86854157/225451901-575e0cd6-78c1-4def-95c2-e67423bc4806.png)

6. Edit `mysite/setting.py` so the `INSTALLED_APPS` setting looks like this: 
```
INSTALLED_APPS = [
    'polls.apps.PollsConfig',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]
```
>> Basically, just add the topmost line in the array.

To make the migration (basically telling Django to store changes to your model), use `python manage.py makemigrations polls`
![image](https://user-images.githubusercontent.com/86854157/225452447-a477a123-af9c-4932-8d0a-8d8b968acc72.png)

Then, do `python manage.py sqlmigrate polls 0001`
![image](https://user-images.githubusercontent.com/86854157/225452614-2242d84f-ae35-4389-94a0-bce3e6de9c46.png)

Then, migrate again with `python manage.py migrate`
>> You have to migrate every time you make a change to your model.

![image](https://user-images.githubusercontent.com/86854157/225452748-81c7f15b-c187-4b80-b306-71c149412b5b.png)
