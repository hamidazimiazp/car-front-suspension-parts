from django.contrib.auth.models import User
from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from django.utils.translation import gettext_lazy as _
from django.contrib.auth import authenticate


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name',
                  'last_name', 'password']
        extra_kwargs = {'password': {'write_only': True}}


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField(required=True)
    password = serializers.CharField(write_only=True, required=True, style={'input_type': 'password'})

    def validate(self, data):
        email = data.get('email')
        password = data.get('password')

        if email and password:
            # Try to fetch the user by email
            try:
                user = User.objects.get(email=email)
            except User.DoesNotExist:
                raise serializers.ValidationError(_("Invalid email or password."))

            # Authenticate the user
            user = authenticate(username=user.username, password=password)

            if user is None:
                raise serializers.ValidationError(_("Invalid email or password."))
            if not user.is_active:
                raise serializers.ValidationError(_("User account is deactivated."))
        else:
            raise serializers.ValidationError(_("Email and password are required."))

        data['user'] = user
        return data


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, style={'input_type': 'password'})
    password_confirm = serializers.CharField(write_only=True, required=True, style={'input_type': 'password'})

    class Meta:
        model = User
        fields = ['username', 'email', 'first_name', 'last_name', 'password', 'password_confirm']

    def validate(self, data):
        """
        Check that the two password entries match.
        """
        if data['password'] != data['password_confirm']:
            raise serializers.ValidationError("Passwords do not match.")
        return data

    def create(self, validated_data):
        # Remove the password_confirm as it's not needed for the User model
        validated_data.pop('password_confirm')

        # Hash the password before saving the user
        validated_data['password'] = make_password(validated_data['password'])
        
        # Create and return the user instance
        return User.objects.create(**validated_data)
