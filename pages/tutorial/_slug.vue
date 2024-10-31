<template>
  <article class="container mx-auto px-4 py-8">
    <ContentDoc v-slot="{ doc }">
      <h1 class="text-4xl font-bold mb-4">{{ doc.title }}</h1>
      <div class="prose max-w-none">
        <ContentRenderer :value="doc" />
      </div>
    </ContentDoc>
  </article>
</template>