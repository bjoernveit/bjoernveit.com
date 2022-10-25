<script setup lang="ts">
import FlippableCard from "./components/FlippableCard.vue";
import Polaroid from "./components/PolaroidImg.vue";
import Contact, { ContactItem } from "@/components/ContactIcons.vue";

const contactMsg = "Feel free to get in contact via:";
const contactItems: Array<ContactItem> = [
  {
    iconSrc: "/icons/mail-icon.svg",
    iconAlt: "Mail to contact@bjoernveit.com",
    linkHref: "mailto:contact@bjoernveit.com",
  },
  {
    iconSrc: "/icons/github-icon.svg",
    iconAlt: "Github Profile bjoernveit",
    linkHref: "https://github.com/bjoernveit",
  },
  {
    iconSrc: "/icons/xing-icon.svg",
    iconAlt: "Xing Profile Björn Veit",
    linkHref: "https://www.xing.com/profile/Bjoern_Veit7/cv",
  },
];

defineExpose({
  contactItems,
  contactMsg,
});
</script>

<template>
  <main>
    <FlippableCard>
      <template #front>
        <div class="card card--front">
          <Polaroid alt="Portrait Björn Veit" imgSrc="/portrait.jfif">
            <h1 class="content__headline">Björn Veit</h1>
            <h2 class="content__subline">Full Stack Software Developer</h2>
            <!--        <div>
                          <div class="content__info info">
                            <div class="info__links">
                              <ul>
                                <li><span class="material-symbols-outlined">mail</span></li>
                                <li><span class="material-symbols-outlined">attach_file</span></li>
                                <li><svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle">
                                  <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                                </svg></li>
                              </ul>
                            </div>

                          </div>
                          <span class="material-symbols-outlined position&#45;&#45;bottom-right">
                          navigate_next
                        </span>
                        </div>-->
          </Polaroid>
        </div>
      </template>
      <template #back>
        <div class="card card--back">
          <div class="text-block">
            <h3>About me</h3>
            <p>Hi, I am a full stack developer and Basketball-Coach.</p>
            <p>Here are a few things I am passionate about:</p>
            <ul>
              <li>Clean Code & TDD</li>
              <li>Fitness</li>
              <li>Basketball</li>
              <li>Photography</li>
              <li>Board & PnP Games</li>
              <li>
                Small Pet Projects
                <i
                  >(<a
                    class="text-link"
                    href="https://bjoernveit.com/HammerTime/"
                    title="Try this Weekend Project of mine"
                    target="_blank"
                    >creating Minigames</a
                  >, Micropython, etc.)</i
                >
              </li>
            </ul>

            <Contact :contactItems="contactItems" :msg="contactMsg"></Contact>
          </div>
        </div>
      </template>
    </FlippableCard>
  </main>
</template>

<style scoped>
.text-block {
  padding: 0.5rem;
}
</style>
