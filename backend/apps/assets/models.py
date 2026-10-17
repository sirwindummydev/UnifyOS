from django.db import models

# Create your models here.

class AssetType(models.Model):
    tenant_id = models.IntegerField()
    name = models.CharField(max_length=128)
    description = models.TextField(blank=True)

    class Meta:
      unique_together = ('tenant_id', 'name')

    def __str__(self):
        return f"{self.name} (Tenant #{self.tenant_id})"


class Asset(models.Model):
    asset_type = models.ForeignKey(AssetType, on_delete=models.PROTECT, related_name="assets")
    tenant_id = models.IntegerField()
    tenant_user_id = models.IntegerField(null=True, blank=True)
    serial_number = models.CharField(max_length=100, unique=True)

    STATUS_CHOICES = [
        ("assigned","Assigned"),
        ("in_use","In Use"),
        ("in_storage","In Storage"),
        ("under_repair","Under Repair"),
        ("retired","Retired"),
        ("refurbished","Refurbished"),
    ]

    def save(self, *args, **kwargs):
        if self.item_status not in ['assigned', 'in_use']:
            self.tenant_user_id = None
        super().save(*args, **kwargs)

    item_status = models.CharField(max_length=100, choices=STATUS_CHOICES, default="in_storage")

    class Meta:
        unique_together = ("tenant_id", "serial_number")

    def __str__(self):
        return f"{self.serial_number}"