from django.views.generic import CreateView
from models import SkillCategory, Skill, Project, Experience, Bio
from models import ContactEntry, CaseEntry
from django.contrib import messages


class HomeView(CreateView):
    template_name = 'web_app/home.html'
    model = ContactEntry
    fields = ['name', 'email','subject', 'message']
    success_url = '/#contact'

    def get_context_data(self, **kwargs):
        context = super(HomeView, self).get_context_data(**kwargs)
        context['skills'] = SkillCategory.objects.all().prefetch_related('skills')
        context['sample_projects'] = Project.objects.all()
        context['experiences'] = Experience.objects.all()
        context['bio'] = Bio.objects.get()
        # context['cases'] = CaseEntry.objects.all()
        return context

    def form_valid(self, form):
        r = super(HomeView, self).form_valid(form)
        messages.add_message(self.request, messages.INFO, 'Message sent. Thank you for contacting me.')
        return r
