from __future__ import unicode_literals

from django.db import models
from versatileimagefield.fields import VersatileImageField, PPOIField

# Create your models here.
class Bio(models.Model):
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    description = models.TextField()
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    location = models.CharField(max_length=30)
    latlong = models.CharField(max_length=50)
    github_url = models.URLField("Github URL")
    linkedin_url = models.URLField("Linkedin URL")

    class Meta:
        verbose_name = 'Bio'
        verbose_name_plural = 'Bio'


class SkillCategory(models.Model):
    name = models.CharField("Name", max_length=30)
    order = models.SmallIntegerField(default = 0)

    class Meta:
        ordering = ['order']
        verbose_name = 'Skill category'
        verbose_name_plural = 'Skill categories'

class Skill(models.Model):
    name = models.CharField("Name", max_length=30)
    description = models.TextField()
    category = models.ForeignKey(SkillCategory)

    class Meta:
        verbose_name = 'Skill'
        verbose_name_plural = 'Skills'



class Experience(models.Model):
    title = models.CharField(max_length=70)
    _from = models.DateField()
    to = models.DateField(blank=True, null=True)
    description = models.TextField()
    skills = models.ManyToManyField(Skill)
    exp_type = models.CharField("Experience type", max_length=10, choices=[('education', 'Education'), ('work', 'Work')])

    class Meta:
        verbose_name = 'Experience'
        verbose_name_plural = 'Experiences'



class Project(models.Model):
    title = models.CharField(max_length=70)
    short_desc = models.CharField(max_length=140)
    image = VersatileImageField('Imagen', ppoi_field='ppoi')
    ppoi = PPOIField('Image center')
    description = models.TextField()
    demo_url = models.URLField("Demo URL", blank=True, null=True)
    source_url = models.URLField("Source URL", blank=True, null=True)
    skills = models.ManyToManyField(Skill)

    class Meta:
        verbose_name = 'Project'
        verbose_name_plural = 'Projects'
