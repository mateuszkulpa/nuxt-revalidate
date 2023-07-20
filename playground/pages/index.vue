<template>
  <div>
    <h1>Index</h1>
    <p>{{ data?.generatedAt }}</p>
  </div>
</template>

<script setup lang="ts">
import { useAsyncData } from "#app";

const { data } = await useAsyncData(async () => ({
  generatedAt: new Date().toLocaleString(),
}));
</script>
