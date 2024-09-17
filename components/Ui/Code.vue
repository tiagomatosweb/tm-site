<template>
  <div
    class="relative px-10 py-12 pt-20 bg-gray-900 dark:bg-gray-900/50 rounded-2xl shadow-xl dark:border dark:border-gray-600">
    <div class="absolute top-8 left-8 justify-start items-start gap-2.5 flex">
      <div class="size-3 bg-red-400 rounded-full"></div>
      <div class="size-3 bg-amber-300 rounded-full"></div>
      <div class="size-3 bg-green-400 rounded-full"></div>
    </div>

    <slot />
  </div>
</template>
