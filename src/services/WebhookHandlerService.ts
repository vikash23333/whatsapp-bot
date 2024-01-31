import { Request, Response } from 'express';
import { WebhookSenderService } from './WebhookSenderService';
import { readMessages, regex_emoji } from '../helpers/constants';
import { WebhookTextMessageHandler } from '../helpers/webhook_message_haldler';
import { UserTransectionDetails } from '../models/service_order_request.model';
import { setUserTransactionDetails } from '../helpers/functions';

class WebhookHandlerService {
  
  private senderService: WebhookSenderService;
  public mainUserList:Map<String, UserTransectionDetails>;

  constructor(senderService: WebhookSenderService, userList: Map<String, UserTransectionDetails>) {
    this.senderService = senderService;
    this.mainUserList= userList;
  }
  
  public handleIncomingMessages(req: Request, res: Response): void {
    try {
      const body = req.body;

      // Check if the request is a verification request
      if (body.object) {
        let entryCheck: any=req.body.entry;
        let changesCheck: any=entryCheck[0].changes;
        let messageCheck: any=changesCheck[0].value.messages;

        if (entryCheck && changesCheck && changesCheck[0] && messageCheck && messageCheck[0] && !readMessages.includes(messageCheck[0].id)  )
        {
          //Initilizing WebhookTextMessageHandler( to get phone_num_id, message_id, msg_body, e.t.c)
          const webhookTextHandler=new WebhookTextMessageHandler(req, res,regex_emoji);
          let FORM:String=webhookTextHandler.FORM;

          //reading the message if text type is not unsupported
          if (webhookTextHandler.ISOTHERS == false)  this.senderService.readWhatsAppMessage(webhookTextHandler.PHONE_NUMBER_ID, webhookTextHandler.MESSEGE_ID);

          if(this.mainUserList.has(FORM)){
            // this.mainUserList['zz']=
            // setUserTransactionDetails(this.mainUserList,FORM,{
            //   "msg_id":msg_id,
            //   "phoneNumber":form,
            //   "phone_number_id":phone_number_id,
            //   "msg_body":msg_body,
            //   "fromName":fromName
            // })
          }else{
            
          }

                

        }




        // body.entry.forEach((entry: any) => {
        //   const webhookEvent = entry.messaging[0];
        //   // Extract sender ID and message text
        //   const senderId = webhookEvent.sender.id;

        //   if (webhookEvent.message) {
        //     // Handle incoming text messages
        //     const messageText = webhookEvent.message.text;
        //     console.log(`Received text message from ${senderId}: ${messageText}`);

        //     // Your custom logic here for processing text messages

        //     // Reply to the message
        //     this.senderService.sendTextMessage(senderId, 'Hello! This is your WhatsApp bot.');
        //   } else if (webhookEvent.postback) {
        //     // Handle postback messages
        //     const postbackPayload = webhookEvent.postback.payload;
        //     console.log(`Received postback from ${senderId}: ${postbackPayload}`);

        //     // Your custom logic here for processing postback messages

        //     // Reply to the postback
        //     this.senderService.sendTextMessage(senderId, 'You triggered a postback event.');
        //   }
        // });

        // Respond to the verification request
        res.status(200).send('EVENT_RECEIVED');
      } else {
        // Respond with '404 Not Found' for other requests
        res.sendStatus(404);
      }
    } catch (error) {
      console.error('Error handling incoming messages:', error);
      res.sendStatus(500);
    }
  }
}

export { WebhookHandlerService };