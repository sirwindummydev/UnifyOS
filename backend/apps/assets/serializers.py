from rest_framework import serializers
from .models import Asset, AssetType


class AssetTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = AssetType
        fields = ['id', 'name']

class AssetSerializer(serializers.ModelSerializer):
    asset_type = AssetTypeSerializer(read_only = True)
    asset_type_id = serializers.PrimaryKeyRelatedField(
    queryset=AssetType.objects.all(),
    source='asset_type',
    write_only=True
)

    class Meta:
        model = Asset
        fields = ['id','tenant_id','tenant_user_id','serial_number','item_status','asset_type','asset_type_id']