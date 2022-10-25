<script setup lang="ts">
import FlippableCard from "./components/FlippableCard.vue";
import Polaroid from "./components/PolaroidImg.vue";
import Contact from "@/components/ContactIcons.vue";
import type { ContactItem } from "@/components/ContactIcons.vue";

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
        <Polaroid alt="Portrait Björn Veit" imgSrc="/portrait.jfif">
          <h1 class="content__headline">Björn Veit</h1>
          <div class="delimiter"></div>
          <h2 class="content__subline">Full Stack Software Developer</h2>
        </Polaroid>
      </template>
      <template #back>
        <div class="card card--back">
          <div class="text-block">
            <h3>About me</h3>
            <p>Hi, I am a Full-Stack-Developer and Basketball-Coach.</p>
            <p>I am passionate about:</p>
            <ul>
              <li>Clean Code & TDD</li>
              <li>Basketball, Baseball & Fitness</li>
              <li>Photography</li>
              <li>Board & PnP Games</li>
              <li>
                Small Pet Projects
                <em
                  >(<a
                    class="text-link"
                    href="https://bjoernveit.com/HammerTime/"
                    title="Try this Weekend Project of mine"
                    target="_blank"
                    @click.stop
                    >Minigames</a
                  >, Micropython, etc.)</em
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
