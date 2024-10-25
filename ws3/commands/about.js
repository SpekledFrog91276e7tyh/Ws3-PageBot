module.exports = {
  description: "What is WieAI?",
  async run({ api, send, admin }){
    setTimeout(async () => await send({
      attachment: {
        type: "template",
        payload: {
          text: `🤖 About Me:
Nigga STfu you dont need to know about me`,
        }
      }
    }), 2*1000);
  }
}
