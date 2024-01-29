"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const WebhookController_1 = __importDefault(require("../controllers/WebhookController"));
const WebhookVerificationService_1 = require("../services/WebhookVerificationService");
const WebhookHandlerService_1 = require("../services/WebhookHandlerService");
const WebhookSenderService_1 = require("../services/WebhookSenderService");
const router = express_1.default.Router();
const verificationService = new WebhookVerificationService_1.WebhookVerificationService(`${process.env.VERIFY_TOKEN}`);
const senderService = new WebhookSenderService_1.WebhookSenderService(`${process.env.PAGE_ACCESS_TOKEN}`);
const handlerService = new WebhookHandlerService_1.WebhookHandlerService(senderService);
const webhookController = new WebhookController_1.default(verificationService, handlerService, senderService);
router.use('/webhook', webhookController.getRouter());
exports.default = router;
