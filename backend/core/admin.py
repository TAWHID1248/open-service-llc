from django.contrib import admin

from .models import FAQ, BlogPost, Category, ContactMessage, Service, ServiceImage, Testimonial


class ServiceImageInline(admin.TabularInline):
    model = ServiceImage
    extra = 1


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ["name", "slug", "order"]
    prepopulated_fields = {"slug": ("name",)}
    inlines = [ServiceImageInline]


@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ["author_name", "author_title", "is_featured", "order"]
    list_filter = ["is_featured"]


@admin.register(FAQ)
class FAQAdmin(admin.ModelAdmin):
    list_display = ["question", "order"]


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ["name", "slug"]
    prepopulated_fields = {"slug": ("name",)}


@admin.register(BlogPost)
class BlogPostAdmin(admin.ModelAdmin):
    list_display = ["title", "category", "published_date"]
    list_filter = ["category"]
    prepopulated_fields = {"slug": ("title",)}


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ["name", "email", "phone", "subject", "created_at"]
    readonly_fields = ["name", "email", "phone", "subject", "message", "created_at"]
