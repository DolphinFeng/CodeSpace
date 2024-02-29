<template>
    <a :href="'#'+to">
        <slot />
    </a>
</template>

<script setup>
defineProps({
    to: {
        type: String,
        required: true  // 该值必须传
    }
})
</script>