from rest_framework import generics

from .models import FAQ, BlogPost, Category, Service, Testimonial
from .serializers import (
    BlogPostDetailSerializer,
    BlogPostListSerializer,
    CategorySerializer,
    ContactMessageSerializer,
    FAQSerializer,
    ServiceDetailSerializer,
    ServiceListSerializer,
    TestimonialSerializer,
)


class ServiceListView(generics.ListAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceListSerializer


class ServiceDetailView(generics.RetrieveAPIView):
    queryset = Service.objects.prefetch_related("gallery")
    serializer_class = ServiceDetailSerializer
    lookup_field = "slug"


class TestimonialListView(generics.ListAPIView):
    serializer_class = TestimonialSerializer

    def get_queryset(self):
        queryset = Testimonial.objects.all()
        if self.request.query_params.get("featured") == "true":
            queryset = queryset.filter(is_featured=True)
        return queryset


class FAQListView(generics.ListAPIView):
    queryset = FAQ.objects.all()
    serializer_class = FAQSerializer


class CategoryListView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class BlogPostListView(generics.ListAPIView):
    serializer_class = BlogPostListSerializer

    def get_queryset(self):
        queryset = BlogPost.objects.select_related("category")
        category_slug = self.request.query_params.get("category")
        if category_slug:
            queryset = queryset.filter(category__slug=category_slug)
        return queryset


class BlogPostDetailView(generics.RetrieveAPIView):
    queryset = BlogPost.objects.select_related("category")
    serializer_class = BlogPostDetailSerializer
    lookup_field = "slug"


class ContactMessageCreateView(generics.CreateAPIView):
    serializer_class = ContactMessageSerializer
