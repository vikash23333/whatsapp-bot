"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class WebhookController {
    constructor(verificationService, handlerService, senderService) {
        this.verificationService = verificationService;
        this.handlerService = handlerService;
        this.senderService = senderService;
        this.router = express_1.default.Router();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get('/', this.verificationService.verifyWebhook.bind(this.verificationService));
        this.router.post('/', this.handlerService.handleIncomingMessages.bind(this.handlerService)); //senderService
    }
    getRouter() {
        return this.router;
    }
}
exports.default = WebhookController;
