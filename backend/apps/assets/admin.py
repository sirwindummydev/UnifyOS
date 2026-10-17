from django.contrib import admin
from .models import AssetType, Asset

# Register your models here.
@admin.register(AssetType)
class AssetTypeAdmin(admin.ModelAdmin):
    list_display = ['id','tenant_id','name','description']


@admin.register(Asset)
class AssetsAdmin(admin.ModelAdmin):
    list_display = ['id','asset_type','tenant_id','tenant_user_id','serial_number', 'item_status']