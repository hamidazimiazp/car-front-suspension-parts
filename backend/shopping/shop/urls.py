from rest_framework.routers import SimpleRouter
from .views import CategoryViewSet, ProductViewSet
from django.urls import path


app_name = "shop"
urlpatterns = [
    
]

router = SimpleRouter()
router.register(r'categories', CategoryViewSet, basename='categories')
router.register(r'products', ProductViewSet, basename='product')
urlpatterns += router.urls
