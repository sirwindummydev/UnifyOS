from django.shortcuts import render
from rest_framework import viewsets
from .models import Asset
from .serializers import AssetSerializer


class AssetViewSet(viewsets.ModelViewSet):
    queryset = Asset.objects.all()
    serializer_class = AssetSerializer

    # @action(detail=True, methods=['get'], url_path='organization')
    # def entitlements(self, request, pk=None):
    #     organization = AssetSerializer.objects.filter(tenant_id=pk, enabled=True)
    #     return Response(TenantModuleEntitlementSerializer(organization, many=True).data)



    