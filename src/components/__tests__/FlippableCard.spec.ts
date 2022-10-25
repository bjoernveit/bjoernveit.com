import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import FlippableCard from "../FlippableCard.vue";

const FRONT_CONTENT = "Front Content";
const BACK_CONTENT = "Back Content";
const SELECTOR_FRONT = ".flippable-card--front";
const SELECTOR_BACK = ".flippable-card--back";
const SHOW_CLASS = "show";

describe("FlippableCard", () => {
  it("Back is hidden by default", () => {
    const wrapper = mount(FlippableCard, {
      slots: {
        front: FRONT_CONTENT,
        back: BACK_CONTENT,
      },
    });

    expect(wrapper.find(SELECTOR_FRONT).classes()).toContain(SHOW_CLASS);
    expect(wrapper.find(SELECTOR_BACK).classes()).not.toContain(SHOW_CLASS);
  });

  it("Click toggles Sides", async () => {
    const wrapper = mount(FlippableCard, {
      slots: {
        front: FRONT_CONTENT,
        back: BACK_CONTENT,
      },
    });
    // Front
    expect(wrapper.find(SELECTOR_FRONT).classes()).toContain(SHOW_CLASS);
    expect(wrapper.find(SELECTOR_BACK).classes()).not.toContain(SHOW_CLASS);

    await wrapper.trigger("click");

    // Back
    expect(wrapper.find(SELECTOR_FRONT).classes()).not.toContain(SHOW_CLASS);
    expect(wrapper.find(SELECTOR_BACK).classes()).toContain(SHOW_CLASS);

    await wrapper.trigger("click");

    // Front
    expect(wrapper.find(SELECTOR_FRONT).classes()).toContain(SHOW_CLASS);
    expect(wrapper.find(SELECTOR_BACK).classes()).not.toContain(SHOW_CLASS);
  });
});
