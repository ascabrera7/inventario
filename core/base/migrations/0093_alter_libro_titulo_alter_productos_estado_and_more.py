# Generated by Django 4.2 on 2023-05-12 09:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0092_alter_reserva_libro'),
    ]

    operations = [
        migrations.AlterField(
            model_name='libro',
            name='titulo',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='productos',
            name='estado',
            field=models.BooleanField(default=True, verbose_name='Visible(Si) Oculto(No)'),
        ),
        migrations.AlterField(
            model_name='reserva',
            name='estado',
            field=models.BooleanField(default=True, verbose_name='Entregado(Sí) Recibido(No)'),
        ),
    ]
