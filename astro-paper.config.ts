import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://emirgultekin.com/",
    title: "Emir Gültekin",
    description: "Emir Gültekin - Kişisel Blog ve Notlar",
    author: "Emir Gültekin",
    profile: "https://emirgultekin.com/",
    ogImage: "default-og.jpg",
    lang: "tr",
    timezone: "Europe/Istanbul",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      url: "https://github.com/xemirgultekin-hue/Emir-G-ltekin/edit/main/src/content/posts",
      text: "Suggest Changes",
      appendFilePath: true,
    },
  },
});
