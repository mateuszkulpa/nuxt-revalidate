<template>
  <div>
    <h1>Blog - {{ route.params.slug }}</h1>
    <p>{{ data?.generatedAt }}</p>
  </div>
</template>

<script setup lang="ts">
import { useAsyncData, useRoute } from "#app";
const route = useRoute();

const { data } = await useAsyncData(async () => ({
  generatedAt: new Date().toLocaleString(),
}));
</script>
