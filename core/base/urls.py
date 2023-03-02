from django.urls import path
from core.base.views.autor.views import *
from core.base.views.categoria.views import *
from core.base.views.productos.views import *
from core.base.views.beneficiario.views import *
from core.base.views.suministro.views import *


app_name = 'base'

urlpatterns = [
    #Autor
    path('autor/listado/', AutorView.as_view(), name='autor_listado'), 
    # path ('autor/listado/',AutorListView.as_view(), name='autor_listado'),
    # path ('autor/add/',AutorCreateView.as_view(), name='autor_create'),
    # path ('autor/edit/<int:pk>/',AutorUpdateView.as_view(), name='autor_editar'),
    # path ('autor/delete/<int:pk>/',AutorDeleteView.as_view(), name='autor_eliminar'),
    # path ('autor/form/',AutorFormView.as_view(), name='autor_form'),

    #categoria
    path ('categoria/listado/',CategoriaListView.as_view(), name='categoria_listado'),
    path ('categoria/add/',CategoriaCreateView.as_view(), name='categoria_create'),
    path ('categoria/edit/<int:pk>/',CategoriaUpdateView.as_view(), name='categoria_editar'),
    path ('categoria/delete/<int:pk>/',CategoriaDeleteView.as_view(), name='categoria_eliminar'),
    path ('categoria/form/',CategoriaFormView.as_view(), name='categoria_form'),

    #productos
    path('productos/listado/', ProductosListView.as_view(), name='productos_listado'),
    path('productos/add/', ProductosCreateView.as_view(), name='productos_create'),
    path('productos/edit/<int:pk>/', ProductosUpdateView.as_view(), name='productos_editar'),
    path('productos/delete/<int:pk>/', ProductosDeleteView.as_view(), name='productos_eliminar'),

    #Beneficiarios
    path('beneficiario/', BeneficiarioView.as_view(), name='beneficiario_listado'), 

    #Suministro
    path('suministro/listado/', SuministroListView.as_view(), name='suministro_listado'),
    path('suministro/add/', SuministroCreateView.as_view(), name='suministro_create'),
    path('suministro/delete/<int:pk>/', SuministroDeleteView.as_view(), name='suministro_delete'),
    path ('suministro/edit/<int:pk>/',SuministroUpdateView.as_view(), name='suministro_edit'),

    
]