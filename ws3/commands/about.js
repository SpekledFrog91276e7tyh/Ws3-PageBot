const axios = require("axios");
const name = "about";
module.exports = {
  name,
  description: "confess your feelings",
  async run({ api, event, send, args }) {
    const PAGE_ACCESS_TOKEN = api.PAGE_ACCESS_TOKEN;
    try {
      await api.publishPost('Test 123', PAGE_ACCESS_TOKEN);
      send('Post published successfully!');
    } catch (error) {
      console.error(error);
      send('Failed to publish post.');
    }
  }
};
