class MessageParser {
    constructor(actionProvider) {
        this.actionProvider = actionProvider;
    }

    parse(message) {
        const lowerCaseMessage = message.toLowerCase();

        if (lowerCaseMessage.includes("hello")){
            this.actionProdvider.greet();
        }

        if (lowerCaseMessage.includess("javascript")) {
            this.actionProvider.handleJavascriptList()
        }
    }
}

export default MessageParser;