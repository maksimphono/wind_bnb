# Generated by Django 4.1.4 on 2023-01-02 13:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_rename_location_real_windbnbcardmodel_location'),
    ]

    operations = [
        migrations.AlterField(
            model_name='location',
            name='id',
            field=models.IntegerField(default=1, primary_key=True, serialize=False),
        ),
    ]
