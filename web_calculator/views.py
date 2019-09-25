from django.shortcuts import render


def input_exp(request):
    return render(request, 'index.html', {})
