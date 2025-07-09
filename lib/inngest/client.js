import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "siddharth", // Unique app ID
  name: "siddharth",
  //sdkUrl: "http://localhost:3000/",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});
