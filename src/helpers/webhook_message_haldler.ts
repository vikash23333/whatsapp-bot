
class WebhookTextMessageHandler {
    req: any;
    res: any;
    regex_emoji: any;
    PHONE_NUMBER_ID: any;
    FORM: any;
    MESSEGE_ID: any;
    FORM_NAME: any;
    MESSAGE_BODY: string='';
    ISOTHERS: boolean = false;
    BUTTONPAYLOAD: boolean = false;

    constructor(req:any, res:any, regex_emoji:any) { 
      this.req = req;
      this.res = res;
      this.regex_emoji = regex_emoji;
  
      this.extractMessageDetails();
    }
  
    extractMessageDetails() {
      const changes = this.req.body.entry[0].changes[0].value;
      this.PHONE_NUMBER_ID = changes.metadata.phone_number_id;
      this.FORM = changes.messages[0].from;
      this.MESSEGE_ID = changes.messages[0].id;
  
      if ("contacts" in changes) {
        this.FORM_NAME = changes.contacts[0].profile.name;
      }
      const messageType = changes.messages[0].type;
      this.handleMessageType(messageType, changes.messages[0]);
    }
  
    handleMessageType(type:any, message:any) {
      switch (type) {
        case "text":
          this.handleTextMessage(message);
          break;
        case "sticker":
        case "image":
        case "audio":
        case "contact":
        case "location":
        case "video":
        case "document":
        case "reaction":
          this.MESSAGE_BODY = "";
          break;
        case "unsupported":
          this.MESSAGE_BODY = "";
          this.ISOTHERS = true;
          break;
        default:
          this.handleOtherMessage(message);
          break;
      }
    }
    handleTextMessage(message:any) {
        this.MESSAGE_BODY = message.text.body;
        if (this.regex_emoji.test(this.MESSAGE_BODY)) {
          this.MESSAGE_BODY = "";
        }
      }
    
      handleOtherMessage(message:any) {
        this.MESSAGE_BODY = message.button.text;
        this.BUTTONPAYLOAD = message.button.payload;
      }
}

export { WebhookTextMessageHandler }