<script setup lang='ts'>

</script>

<!-- -- template -- --> 
<template>
<div>

<div class="grid grid-cols-2 md:mx-7 gap-y-10 place-items-center mb-20">
    <SideBarButton btn-label="Dashboard" path="/dashboard" icon="mdi:home" />
    <SideBarButton btn-label="All files" path="/user/everything" icon="mdi:file-table-box-multiple-outline"  />
    
    <SideBarButton btn-label="Shared" path="/user/shared" icon="mdi:share" />
    <SideBarButton btn-label="Favorites" path="/user/favorites" icon="mdi:star" />
    
    <SideBarButton btn-label="Recent" path="/user/recent" icon="mdi:recent" />
    <SideBarButton btn-label="Request" path="/user/request" icon="mdi:move-resize-variant" />
</div>

<div class="grid grid-cols-2 md:mx-7 gap-y-10 place-items-center">
    <SideBarButton btn-label="Pictures" path="/user/pictures" icon="mdi:picture" />
    <SideBarButton btn-label="Videos" path="/user/videos" icon="mdi:video" />
    
    <SideBarButton btn-label="Documents" path="/user/documents" icon="mdi:file-document-multiple" />
    <SideBarButton btn-label="Signed" path="/user/signed" icon="mdi:signature-freehand" />
</div>

</div>
</template>