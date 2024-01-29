"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookHandlerService = void 0;
class WebhookHandlerService {
    constructor(senderService) {
        this.senderService = senderService;
    }
    handleIncomingMessages(req, res) {
        try {
            const body = req.body;
            // Check if the request is a verification request
            if (body.object === 'page') {
                body.entry.forEach((entry) => {
                    const webhookEvent = entry.messaging[0];
                    // Extract sender ID and message text
                    const senderId = webhookEvent.sender.id;
                    if (webhookEvent.message) {
                        // Handle incoming text messages
                        const messageText = webhookEvent.message.text;
                        console.log(`Received text message from ${senderId}: ${messageText}`);
                        // Your custom logic here for processing text messages
                        // Reply to the message
                        this.senderService.sendTextMessage(senderId, 'Hello! This is your WhatsApp bot.');
                    }
                    else if (webhookEvent.postback) {
                        // Handle postback messages
                        const postbackPayload = webhookEvent.postback.payload;
                        console.log(`Received postback from ${senderId}: ${postbackPayload}`);
                        // Your custom logic here for processing postback messages
                        // Reply to the postback
                        this.senderService.sendTextMessage(senderId, 'You triggered a postback event.');
                    }
                });
                // Respond to the verification request
                res.status(200).send('EVENT_RECEIVED');
            }
            else {
                // Respond with '404 Not Found' for other requests
                res.sendStatus(404);
            }
        }
        catch (error) {
            console.error('Error handling incoming messages:', error);
            res.sendStatus(500);
        }
    }
}
exports.WebhookHandlerService = WebhookHandlerService;
