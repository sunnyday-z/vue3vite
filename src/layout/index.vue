<template>
  <div class="container">1</div>
</template>
<script setup lang="ts">
import { getCurrentInstance, onBeforeMount, onMounted, reactive } from 'vue'
// const { proxy } = getCurrentInstance()
const emits = defineEmits([])
const props = defineProps({})
const state = reactive({})
onBeforeMount(() => {})
onMounted(() => {})
defineExpose({ state })
</script>
<style lang="scss" scoped></style>
