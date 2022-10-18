<script setup lang='ts'>
import { HomeIcon, StarIcon, DocumentIcon, ShareIcon, FolderIcon, BellSnoozeIcon,
CameraIcon, VideoCameraIcon, DocumentChartBarIcon, CheckCircleIcon } from '@heroicons/vue/24/solid';

</script>

<!-- -- template -- --> 
<template>
<div>

<div class="grid grid-cols-2 md:mx-7 gap-y-10 place-items-center mb-20">
    <SideBarButton btn-label="Dashboard" path="/dashboard" :icon="HomeIcon" />
    <SideBarButton btn-label="All files" :icon="DocumentIcon"  />
    
    <SideBarButton btn-label="Shared" path="/shared" :icon="ShareIcon" />
    <SideBarButton btn-label="Favorites" path="/favorites" :icon="StarIcon" />
    
    <SideBarButton btn-label="Recent" path="/recent" :icon="FolderIcon" />
    <SideBarButton btn-label="Request" path="/request" :icon="BellSnoozeIcon" />
</div>

<div class="grid grid-cols-2 md:mx-7 gap-y-10 place-items-center">
    <SideBarButton btn-label="Pictures" path="/pictures" :icon="CameraIcon" />
    <SideBarButton btn-label="Videos" path="/videos" :icon="VideoCameraIcon" />
    
    <SideBarButton btn-label="Documents" path="/documents" :icon="DocumentChartBarIcon" />
    <SideBarButton btn-label="Signed" path="/signed" :icon="CheckCircleIcon" />
</div>

</div>
</template>