from datetime import date

from django.core.management.base import BaseCommand

from core.models import FAQ, BlogPost, Category, Service, ServiceImage, Testimonial

SERVICES = [
    {
        "name": "Electrical Services",
        "slug": "electricity",
        "icon": "⚡",
        "tagline": "Safe, Reliable, and Affordable",
        "intro": (
            "At IZZY SERVICE Inc., we install, maintain, and repair electrical systems with "
            "precision and care, ensuring your home or business stays safe, efficient, and up "
            "to code. From minor repairs to full rewiring, our licensed electricians handle it all."
        ),
        "why_choose_us": [
            "Experienced Professionals",
            "Comprehensive Solutions",
            "Safety First",
            "Affordable Pricing",
            "24/7 Emergency Services",
        ],
        "services_included": [
            "Wiring and Rewiring Services",
            "Lighting Installation and Repairs",
            "Electrical Panel Upgrades",
            "Troubleshooting and Repairs",
            "Smart Home Integration",
        ],
        "common_problems": [
            "Frequent power outages or surges",
            "Flickering lights or buzzing outlets",
            "Outdated or unsafe wiring",
            "Faulty switches and circuit breakers",
        ],
        "benefits": [],
        "process_steps": [],
        "gallery": ["Electrical Panel", "Wiring"],
        "order": 1,
    },
    {
        "name": "Painting",
        "slug": "painting",
        "icon": "\U0001f3a8",
        "tagline": "Transform Your Space with a Fresh Look",
        "intro": (
            "At IZZY SERVICE Inc., we bring new life to your interiors and exteriors with "
            "high-quality, long-lasting paint finishes applied by experienced, detail-oriented "
            "professionals."
        ),
        "why_choose_us": [
            "Experienced Painters",
            "Premium-Quality Materials",
            "Interior and Exterior Painting",
            "Custom Color Consultations",
            "Attention to Detail",
        ],
        "services_included": [
            "Interior Painting",
            "Exterior Painting",
            "Cabinet Refinishing and Wall Treatments",
            "Wallpaper Removal",
            "Drywall Repair and Patching",
        ],
        "common_problems": [],
        "benefits": [
            "Increased Property Value",
            "Protection From the Elements",
            "Improved Aesthetic Appeal",
            "Long-Lasting, Even Finish",
        ],
        "process_steps": ["Consultation", "Surface Preparation", "Painting", "Final Touches and Walkthrough"],
        "gallery": ["Interior Painting", "Exterior Painting"],
        "order": 2,
    },
    {
        "name": "HVAC Services",
        "slug": "hvac",
        "icon": "\U0001f321️",
        "tagline": "Keep Your Home Comfortable Year-Round",
        "intro": (
            "At IZZY SERVICE Inc., we keep your heating, ventilation, and air conditioning "
            "systems running at peak performance all year long, with reliable installation, "
            "maintenance, and repair services tailored to your home or business."
        ),
        "why_choose_us": [
            "Certified Technicians",
            "Comprehensive Services",
            "Energy Efficiency Focus",
            "Flexible Scheduling",
            "24/7 Emergency HVAC Repairs",
        ],
        "services_included": [
            "Heating System Installation and Repair",
            "Air Conditioning Installation and Repair",
            "Ductwork Inspection and Cleaning",
            "Thermostat Installation",
            "Routine HVAC Maintenance Plans",
        ],
        "common_problems": [
            "Inconsistent heating or cooling",
            "Poor airflow and ventilation issues",
            "Unusual noises or odors from the system",
            "Rising energy bills due to inefficiency",
        ],
        "benefits": [
            "Improved Performance",
            "Energy Savings",
            "Extended Equipment Lifespan",
            "Better Indoor Air Quality",
        ],
        "process_steps": [],
        "gallery": ["HVAC Unit", "AC Repair"],
        "order": 3,
    },
    {
        "name": "Plumbing",
        "slug": "plumbing",
        "icon": "\U0001f6bf",
        "tagline": "Reliable Solutions for Your Home or Business",
        "intro": (
            "At IZZY SERVICE Inc., our licensed plumbers deliver fast, dependable solutions for "
            "everything from minor leaks to full pipe replacements, keeping your water systems "
            "running smoothly."
        ),
        "why_choose_us": [
            "Experienced Technicians",
            "Comprehensive Repairs",
            "Advanced Equipment",
            "24/7 Emergency Plumbing",
            "Transparent Pricing",
        ],
        "services_included": [
            "Leak Detection and Repair",
            "Drain Cleaning and Unclogging",
            "Pipe Installation and Replacement",
            "Water Heater Installation and Maintenance",
            "Sump Pump Installation and Repair",
        ],
        "common_problems": [
            "Leaky faucets and pipes",
            "Clogged drains and toilets",
            "Low water pressure",
            "Water heater malfunctions",
        ],
        "benefits": ["Reliable Repairs", "Safety", "Efficiency", "Durability"],
        "process_steps": [],
        "gallery": ["Pipe Repair", "Plumbing"],
        "order": 4,
    },
    {
        "name": "Renovation",
        "slug": "renovation",
        "icon": "\U0001f6e0️",
        "tagline": "Transform Your Space with Confidence",
        "intro": (
            "At IZZY SERVICE Inc., our skilled renovation team handles every detail of your "
            "project, from concept to completion, transforming outdated spaces into beautiful, "
            "functional areas that fit your lifestyle."
        ),
        "why_choose_us": [
            "Experienced Professionals",
            "Comprehensive Solutions",
            "Customized Designs",
            "Transparent Pricing",
            "Quality Craftsmanship",
        ],
        "services_included": [
            "Kitchen Renovations",
            "Bathroom Remodeling",
            "Basement Finishing",
            "Living Space Upgrades",
            "Commercial Renovations",
        ],
        "common_problems": [],
        "benefits": [
            "Increased Property Value",
            "Improved Functionality",
            "Enhanced Aesthetic Appeal",
            "Better Energy Efficiency",
        ],
        "process_steps": ["Initial Consultation", "Design Phase", "Construction", "Final Walkthrough"],
        "gallery": ["Kitchen Renovation", "Flooring"],
        "order": 5,
    },
    {
        "name": "Roofing",
        "slug": "roofing",
        "icon": "\U0001f3e0",
        "tagline": "Protect and Enhance Your Property",
        "intro": (
            "At IZZY SERVICE Inc., our experienced roofing crew protects what matters most, "
            "delivering durable installations, repairs, and replacements built to withstand the "
            "elements."
        ),
        "why_choose_us": [
            "Experienced Roofers",
            "Comprehensive Inspections",
            "Quality Materials",
            "Timely Project Completion",
            "Transparent Pricing",
        ],
        "services_included": [
            "Roof Installation",
            "Roof Repairs",
            "Roof Replacement",
            "Roof Inspections and Maintenance",
            "Gutter Installation and Repair",
        ],
        "common_problems": [],
        "benefits": [
            "Long-Lasting Protection",
            "Increased Property Value",
            "Energy Efficiency",
            "Peace of Mind",
        ],
        "process_steps": ["Inspection", "Estimate", "Installation/Repair", "Final Inspection"],
        "gallery": ["Roof Repair", "Roofing"],
        "order": 6,
    },
]

TESTIMONIALS = [
    {"author_name": "Peter Hopper", "author_title": "Homeowner", "quote": "Most builders focus on building new homes, so renovating is typically a part-time activity for such tradespeople.", "is_featured": True},
    {"author_name": "Sue Collins", "author_title": "Homeowner", "quote": "Wood is versatile and flexible, making it the easiest construction material for renovations, and wood buildings.", "is_featured": True},
    {"author_name": "Matt Damon", "author_title": "Property Owner", "quote": "Many people renovate homes to create a new appearance for their home, or so another person can live in the residence.", "is_featured": True},
    {"author_name": "Larry Brown", "author_title": "Client", "quote": "Technology has had a meaningful impact on the renovation process, increasing the significance and strength of the planning stage. The availability of free online design tools.", "is_featured": False},
    {"author_name": "Gale Robbins", "author_title": "Client", "quote": "Although sanitary engineering may be most associated with the design of sewers, treatment and waste water treatment facilities, recycling centers, public landfills and other things which are constructed.", "is_featured": False},
    {"author_name": "Mary Smith", "author_title": "Client", "quote": "Skills within this field are usually employed for the primary goal of disease prevention within human beings by assuring a supply of healthy drinking water.", "is_featured": False},
]

FAQS = [
    {"question": "Periodic maintenance also falls under the general class of repairs?", "answer": "Periodic maintenance such as inspections, adjustments, cleaning, or replacements should be done regularly to ensure proper functioning, and it is generally considered separate from emergency repairs."},
    {"question": "Other repairs may have some urgency, such as a broken?", "answer": "Other repairs may have some urgency, such as a broken water heater or a leaking roof, and should be addressed as soon as possible to prevent further damage to the property."},
    {"question": "Perhaps the most perplexing repairs facing a home owner?", "answer": "Perhaps the most perplexing repairs facing a home owner are those that require diagnosing an underlying cause before a fix can even be attempted."},
    {"question": "Repairs often mean simple replacement of worn?", "answer": "Repairs often mean simple replacement of worn parts or consumable items, while larger issues may require a licensed professional to resolve safely."},
    {"question": "Often the costs of larger repairs will justify the investment?", "answer": "Often the costs of larger repairs will justify the investment when weighed against the cost of replacement or the risk of further property damage."},
    {"question": "Home repair involves the diagnosis and resolution of problems in a home?", "answer": "Home repair involves the diagnosis and resolution of problems in a home, and is related to home maintenance to avoid such problems in the first place."},
]

CATEGORIES = [
    {"name": "Exterior Renovation", "slug": "exterior-renovation"},
    {"name": "Home Maintenance", "slug": "home-maintenance"},
]

BLOG_POSTS = [
    {
        "title": "Hello world!",
        "slug": "hello-world",
        "category_slug": "home-maintenance",
        "excerpt": "Welcome to IZZY SERVICE Inc. This is our first post.",
        "body": "Welcome to IZZY SERVICE Inc. This is our first post covering property maintenance tips and updates.",
        "published_date": date(2024, 10, 21),
    },
    {
        "title": "Another issue for avoiding repairs",
        "slug": "another-issue-for-avoiding-repairs",
        "category_slug": "home-maintenance",
        "excerpt": "Avoiding small repairs can often lead to bigger, costlier problems down the line.",
        "body": "Avoiding small repairs can often lead to bigger, costlier problems down the line. Regular upkeep helps catch issues early before they escalate.",
        "published_date": date(2024, 10, 21),
    },
    {
        "title": "Examples of home maintenance",
        "slug": "examples-of-home-maintenance",
        "category_slug": "exterior-renovation",
        "excerpt": "That should be regularly forecast and budgeted, including repainting or staining outdoor wood or metal, repointing masonry.",
        "body": "That should be regularly forecast and budgeted, including repainting or staining outdoor wood or metal, repointing masonry, and clearing gutters before they become a bigger problem.",
        "published_date": date(2024, 10, 21),
    },
    {
        "title": "Periodic maintenance also falls under",
        "slug": "periodic-maintenance-also-falls-under",
        "category_slug": "home-maintenance",
        "excerpt": "Periodic maintenance also falls under the general class of repairs that should be done regularly.",
        "body": "Periodic maintenance also falls under the general class of repairs. These are inspections, adjustments, cleaning, or replacements that should be done regularly to ensure proper functioning.",
        "published_date": date(2024, 10, 21),
    },
    {
        "title": "Perhaps the most perplexing repairs",
        "slug": "perhaps-the-most-perplexing-repairs",
        "category_slug": "exterior-renovation",
        "excerpt": "In today's era of obsolescence for many products, it is often more convenient to replace something other than attempt a repair.",
        "body": "In today's era of obsolescence for many products, it is often more convenient to replace something other than attempt a repair. A repairman is faced with the task of accurately identifying the problem, then finding the materials, supplies, tools and skills necessary to sufficiently effect the repair.",
        "published_date": date(2024, 10, 21),
    },
]


class Command(BaseCommand):
    help = "Seed the database with IZZY SERVICE Inc. content"

    def handle(self, *args, **options):
        for data in SERVICES:
            gallery_captions = data.pop("gallery")
            service, _ = Service.objects.update_or_create(slug=data["slug"], defaults=data)
            service.gallery.all().delete()
            for i, caption in enumerate(gallery_captions):
                ServiceImage.objects.create(service=service, caption=caption, order=i)
        self.stdout.write(self.style.SUCCESS(f"Seeded {len(SERVICES)} services"))

        for data in TESTIMONIALS:
            Testimonial.objects.update_or_create(author_name=data["author_name"], quote=data["quote"], defaults=data)
        self.stdout.write(self.style.SUCCESS(f"Seeded {len(TESTIMONIALS)} testimonials"))

        for i, data in enumerate(FAQS):
            FAQ.objects.update_or_create(question=data["question"], defaults={**data, "order": i})
        self.stdout.write(self.style.SUCCESS(f"Seeded {len(FAQS)} FAQs"))

        categories = {}
        for data in CATEGORIES:
            category, _ = Category.objects.update_or_create(slug=data["slug"], defaults=data)
            categories[data["slug"]] = category
        self.stdout.write(self.style.SUCCESS(f"Seeded {len(CATEGORIES)} categories"))

        for data in BLOG_POSTS:
            category_slug = data.pop("category_slug")
            BlogPost.objects.update_or_create(
                slug=data["slug"], defaults={**data, "category": categories[category_slug]}
            )
        self.stdout.write(self.style.SUCCESS(f"Seeded {len(BLOG_POSTS)} blog posts"))
