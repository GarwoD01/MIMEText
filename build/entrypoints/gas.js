import { MIMEMessage } from '../MIMEMessage.js';
const envctx = {
    toBase64: function toBase64(data) {
        return Utilities.base64Encode(data, Utilities.Charset.UTF_8);
    },
    toBase64WebSafe: function toBase64WebSafe(data) {
        return Utilities.base64EncodeWebSafe(data);
    },
    eol: '\r\n',
    validateContentType: (v) => {
        return v.length > 0 ? v : false;
    }
};
export function createMimeMessage() {
    return new MIMEMessage(envctx);
}
export { MIMEMessage } from '../MIMEMessage.js';
export { Mailbox } from '../Mailbox.js';
export { MIMETextError } from '../MIMETextError.js';
export { MIMEMessageHeader } from '../MIMEMessageHeader.js';
export { MIMEMessageContent } from '../MIMEMessageContent.js';
