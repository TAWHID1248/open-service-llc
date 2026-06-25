from django.db import models


class Service(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)
    tagline = models.CharField(max_length=255, blank=True)
    icon = models.CharField(max_length=10, blank=True, help_text="Emoji or short icon code")
    intro = models.TextField()
    why_choose_us = models.JSONField(default=list, blank=True, help_text="List of strings")
    services_included = models.JSONField(default=list, blank=True, help_text="List of strings")
    common_problems = models.JSONField(default=list, blank=True, help_text="List of strings")
    benefits = models.JSONField(default=list, blank=True, help_text="List of strings")
    process_steps = models.JSONField(default=list, blank=True, help_text="List of strings")
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["order", "name"]

    def __str__(self):
        return self.name


class ServiceImage(models.Model):
    service = models.ForeignKey(Service, related_name="gallery", on_delete=models.CASCADE)
    image = models.ImageField(upload_to="services/", blank=True, null=True)
    caption = models.CharField(max_length=100, blank=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["order"]

    def __str__(self):
        return f"{self.service.name} - {self.caption or self.pk}"


class Testimonial(models.Model):
    author_name = models.CharField(max_length=100)
    author_title = models.CharField(max_length=100, blank=True)
    quote = models.TextField()
    is_featured = models.BooleanField(default=False)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["order"]

    def __str__(self):
        return self.author_name


class FAQ(models.Model):
    question = models.CharField(max_length=255)
    answer = models.TextField()
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["order"]
        verbose_name = "FAQ"
        verbose_name_plural = "FAQs"

    def __str__(self):
        return self.question


class Category(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)

    class Meta:
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.name


class BlogPost(models.Model):
    title = models.CharField(max_length=255)
    slug = models.SlugField(unique=True)
    category = models.ForeignKey(Category, related_name="posts", on_delete=models.CASCADE)
    excerpt = models.TextField(blank=True)
    body = models.TextField()
    published_date = models.DateField()

    class Meta:
        ordering = ["-published_date"]

    def __str__(self):
        return self.title


class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=30, blank=True)
    subject = models.CharField(max_length=200, blank=True)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.name} - {self.created_at:%Y-%m-%d}"
