from rest_framework.routers import SimpleRouter
from .views import UserViewSet
from django.urls import path


app_name = "accounts"
urlpatterns = [
    
]

router = SimpleRouter()
router.register(r'user', UserViewSet, basename='user')
urlpatterns += router.urls
