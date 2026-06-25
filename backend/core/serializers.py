from rest_framework import serializers

from .models import FAQ, BlogPost, Category, ContactMessage, Service, ServiceImage, Testimonial


class ServiceImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceImage
        fields = ["id", "image", "caption", "order"]


class ServiceListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ["id", "name", "slug", "tagline", "icon", "intro", "order"]


class ServiceDetailSerializer(serializers.ModelSerializer):
    gallery = ServiceImageSerializer(many=True, read_only=True)

    class Meta:
        model = Service
        fields = [
            "id",
            "name",
            "slug",
            "tagline",
            "icon",
            "intro",
            "why_choose_us",
            "services_included",
            "common_problems",
            "benefits",
            "process_steps",
            "gallery",
            "order",
        ]


class TestimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimonial
        fields = ["id", "author_name", "author_title", "quote", "is_featured", "order"]


class FAQSerializer(serializers.ModelSerializer):
    class Meta:
        model = FAQ
        fields = ["id", "question", "answer", "order"]


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["id", "name", "slug"]


class BlogPostListSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)

    class Meta:
        model = BlogPost
        fields = ["id", "title", "slug", "category", "excerpt", "published_date"]


class BlogPostDetailSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)

    class Meta:
        model = BlogPost
        fields = ["id", "title", "slug", "category", "excerpt", "body", "published_date"]


class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ["id", "name", "email", "phone", "subject", "message", "created_at"]
        read_only_fields = ["id", "created_at"]
