## How to Install [Django](https://docs.djangoproject.com/en/4.1/topics/install/)

1) Open CMD Prompt and enter `wsl --install`
![image](https://user-images.githubusercontent.com/86854157/222289264-b1f0c8a3-927b-4b13-af16-d66cf6628f9b.png)

2) Restart computer
3) Create a Linux username and password
4) Install Python
![image](https://user-images.githubusercontent.com/86854157/222290241-66134a13-429b-4904-a646-92c5f8be1ad5.png)

5) Use `sudo apt update`
6) Install pip with  `sudo apt install python3-pip`
![image](https://user-images.githubusercontent.com/86854157/222291530-c374369b-dbe7-457d-9b81-335b5521b528.png)
![image](https://user-images.githubusercontent.com/86854157/222291602-0832871b-dba1-4081-9fde-2d9ad525730f.png)

7) Install venv with `sudo apt install python3.10-venv`
![image](https://user-images.githubusercontent.com/86854157/222292270-65c31e6d-1dce-4683-a211-7351d0a4ffdf.png)

>> Fun fact: if you use do just `apt install python3.10-venv` without `sudo` and then put "yes" for "are you root?", you will receive an infinite printout of y's
![image](https://user-images.githubusercontent.com/86854157/222292831-624e1413-0906-4d73-93a5-86d4b5bb1378.png)

8) Create a [virtual environment](https://docs.python.org/3/tutorial/venv.html) with `python3 -m venv tutorial-env`
![image](https://user-images.githubusercontent.com/86854157/222293147-feaee16d-1bb5-46b3-a904-c99c2efdf75b.png)

9) Activate the virtual environment with `source tutorial-env/bin/activate`
![image](https://user-images.githubusercontent.com/86854157/222293530-bc91cc45-d025-4676-8fe6-cc12c244a87f.png)

10) Use `python -m pip install Django` to install Django
![image](https://user-images.githubusercontent.com/86854157/222293745-65470829-c102-48d1-8c6d-63c856811a55.png)
