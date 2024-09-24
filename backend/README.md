### How To Run :

```
virtualenv .venv
source .venv/bin/activate
pip install -r requirements.txt
cd shopping
python manage.py migrate
python manage.py 0.0.0.0:8000
```
