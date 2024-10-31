<template>
  <main class="container mx-auto px-4 py-8">
    <ContentDoc v-slot="{ doc }">
      <div class="max-w-4xl mx-auto">
        <!-- 返回首页链接 -->
        <NuxtLink 
          to="/" 
          class="text-blue-600 hover:text-blue-800 mb-4 inline-block"
        >
          ← 返回首页
        </NuxtLink>

        <!-- 文章内容 -->
        <article>
          <div class="border-b border-gray-200 py-8">
            <h1 class="text-3xl font-bold mb-4">{{ doc.title }}</h1>
            <p class="text-gray-600">{{ doc.description }}</p>
          </div>
          
          <div class="prose max-w-none mt-8">
            <ContentRenderer :value="doc" />
          </div>
        </article>
      </div>
    </ContentDoc>
  </main>
</template>

<script>
export default {
  name: 'TutorialPage'
}
</script>

<style>
.prose {
  max-width: 65ch;
  margin: 0 auto;
}

.prose h2 {
  font-size: 1.5em;
  margin-top: 2em;
  margin-bottom: 1em;
}

.prose p {
  margin-bottom: 1em;
  line-height: 1.6;
}
</style>