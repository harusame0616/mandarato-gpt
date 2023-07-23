<template>
  <header
    class="h-18 flex items-center justify-center shadow-md shadow-red bg-[#FBD9CE]"
  >
    <LayoutBox class="max-w-5xl flex flex-grow">
      <div>
        <BaseLink href="/" screen-reader-text="マンダラートGPT ホームページ">
          <img src="~/assets/images/logo.svg" alt="マンダラートGPT" />
        </BaseLink>
      </div>
      <div class="flex flex-grow justify-end">
        <BaseButton @click="$router.push('/mandarato/edit')"
          >作成する</BaseButton
        >
      </div>
    </LayoutBox>
  </header>
</template>
