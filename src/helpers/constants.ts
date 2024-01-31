import { UserTransectionDetails } from "../models/service_order_request.model";

var mainUserList: Map<String, UserTransectionDetails> = new Map();
let readMessages:string[] = ["wapid.HKLKJHTIUTIUT86987897687KGJHGKGJKGJGKJHGKJGHJ"];
const regex_emoji = /[\p{Extended_Pictographic}\u{1F3FB}-\u{1F3FF}\u{1F9B0}-\u{1F9B3}]/u;

export { readMessages, regex_emoji, mainUserList }