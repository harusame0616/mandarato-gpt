<template>
  <div class="h-full flex flex-col">
    <PageHeader />
    <layoutSpacer class="w-full" />
    <LayoutBox class="flex-grow flex justify-center flex-wrap">
      <main class="max-w-2xl w-full">
        <NuxtPage />
      </main>
    </LayoutBox>
    <PageFooter />
  </div>
</template>
