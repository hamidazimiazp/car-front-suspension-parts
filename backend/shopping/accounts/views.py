from django.shortcuts import get_object_or_404
from rest_framework import status, viewsets
from django.contrib.auth.models import User
from rest_framework.response import Response
from accounts.serializers import UserSerializer, RegisterSerializer, LoginSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import action
from rest_framework.authtoken.models import Token
from django.contrib.auth import login, logout
from rest_framework_simplejwt.tokens import RefreshToken

class UserViewSet(viewsets.ViewSet):

    def get_permissions(self):
        # Allow everyone to register and login, require authentication for other actions
        if self.action in ['create', 'login']:
            return [AllowAny()]
        return [IsAuthenticated()]

    def list(self, request):
        """List all users (requires authentication)."""
        queryset = User.objects.all()
        serializer = UserSerializer(queryset, many=True)
        return Response(data=serializer.data)

    def create(self, request):
        """Register a new user."""
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        """Retrieve a specific user by ID (requires authentication)."""
        queryset = User.objects.all()
        user = get_object_or_404(queryset, pk=pk)
        serializer = UserSerializer(user)
        return Response(serializer.data)

    def update(self, request, pk=None):
        """Update an existing user (requires authentication)."""
        user = get_object_or_404(User, pk=pk)
        serializer = UserSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def partial_update(self, request, pk=None):
        """Partially update an existing user (requires authentication)."""
        user = get_object_or_404(User, pk=pk)
        serializer = UserSerializer(user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk=None):
        """Delete a user (requires authentication)."""
        user = get_object_or_404(User, pk=pk)
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    @action(detail=False, methods=['post'], permission_classes=[AllowAny])
    def login(self, request):
        """Log in a user using email and password."""
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data['user']

            # Generate JWT tokens (access and refresh)
            refresh = RefreshToken.for_user(user)

            # Return both access and refresh tokens along with user data
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
                # 'user': UserSerializer(user).data
            }, status=status.HTTP_200_OK)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    @action(detail=False, methods=['post'], permission_classes=[IsAuthenticated])
    def logout(self, request):
        """Log out the current user and invalidate their refresh token."""
        try:
            # Get the refresh token from the request data
            refresh_token = request.data.get("refresh")

            # Blacklist the refresh token
            token = RefreshToken(refresh_token)
            token.blacklist()

            # Perform Django logout to remove the session
            logout(request)

            return Response({"detail": "Successfully logged out."}, status=status.HTTP_204_NO_CONTENT)

        except Exception as e:
            return Response({"detail": "Invalid token or token already blacklisted."}, status=status.HTTP_400_BAD_REQUEST)


