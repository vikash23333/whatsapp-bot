"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookSenderService = void 0;
const axios_1 = __importDefault(require("axios"));
class WebhookSenderService {
    constructor(pageAccessToken) {
        this.pageAccessToken = pageAccessToken;
    }
    sendTextMessage(recipientId, text) {
        // Sending logic here
        const messageData = {
            recipient: {
                id: recipientId,
            },
            message: {
                text: text,
            },
        };
        axios_1.default.post(`https://graph.facebook.com/v12.0/me/messages?access_token=${this.pageAccessToken}`, messageData)
            .then((response) => {
            console.log('Message sent successfully:', response.data);
        })
            .catch((error) => {
            console.error('Error sending message:', error.response.data);
        });
    }
}
exports.WebhookSenderService = WebhookSenderService;
