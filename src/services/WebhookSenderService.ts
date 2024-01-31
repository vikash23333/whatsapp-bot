import axios from 'axios';

class WebhookSenderService {
  
  private pageAccessToken: string;

  constructor(pageAccessToken: string) {
    this.pageAccessToken = pageAccessToken;
  }

  public sendTextMessage(recipientId: string, text: string): void {
    // Sending logic here
    const messageData = {
      recipient: {
        id: recipientId,
      },
      message: {
        text: text,
      },
    };

    axios.post(`https://graph.facebook.com/v12.0/me/messages?access_token=${this.pageAccessToken}`, messageData)
      .then((response) => {
        console.log('Message sent successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error sending message:', error.response.data);
      });
  }
  public readWhatsAppMessage(phone_number_id:any, message_id:any) {
    var urlx = `https://graph.facebook.com/v14.0/${phone_number_id}/messages`
    if (phone_number_id != "" && message_id != "") {
      axios({
        method: "POST", // Required, HTTP method, a string, e.g. POST, GET
        url: urlx,
        data: JSON.stringify({
          "messaging_product": "whatsapp",
          "status": "read",
          "message_id": message_id
        }),
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.WHATSAPP_TOKEN}`
        },
      }).then(response => {
        console.log("744 response message read==========================" + response);
      }, error => {
        let text = `${JSON.stringify(error, null, 2)}`;
        console.log("747 response message read==========================" + text); 
      });
    } else {
      console.log("781 Invalid message id==========================");
    }
  
  }
}

export { WebhookSenderService };
