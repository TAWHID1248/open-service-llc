from django.urls import path

from . import views

urlpatterns = [
    path("services/", views.ServiceListView.as_view(), name="service-list"),
    path("services/<slug:slug>/", views.ServiceDetailView.as_view(), name="service-detail"),
    path("testimonials/", views.TestimonialListView.as_view(), name="testimonial-list"),
    path("faqs/", views.FAQListView.as_view(), name="faq-list"),
    path("categories/", views.CategoryListView.as_view(), name="category-list"),
    path("blog/", views.BlogPostListView.as_view(), name="blogpost-list"),
    path("blog/<slug:slug>/", views.BlogPostDetailView.as_view(), name="blogpost-detail"),
    path("contact/", views.ContactMessageCreateView.as_view(), name="contact-create"),
]
