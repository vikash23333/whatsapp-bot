"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookVerificationService = void 0;
class WebhookVerificationService {
    constructor(verifyToken) {
        this.verifyToken = verifyToken;
    }
    verifyWebhook(req, res) {
        const mode = req.query['hub.mode'];
        const token = req.query['hub.verify_token'];
        const challenge = req.query['hub.challenge'];
        // Check if the verification tokens match
        if (mode && token === this.verifyToken) {
            // Respond with the challenge token to verify the webhook
            res.status(200).send(challenge);
        }
        else {
            // Respond with '403 Forbidden' if tokens do not match
            res.sendStatus(403);
        }
    }
}
exports.WebhookVerificationService = WebhookVerificationService;
