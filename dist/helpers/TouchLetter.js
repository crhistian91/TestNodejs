"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TouchLetter = void 0;
const robotjs_1 = __importDefault(require("robotjs"));
const TouchLetter = async () => {
    setInterval(() => {
        const originalMousePos = robotjs_1.default.getMousePos();
        const move = robotjs_1.default.moveMouse(originalMousePos.x + 5, originalMousePos.y);
        console.log(`se movio el mouse${move}`);
    }, 1 * 60 * 1000);
};
exports.TouchLetter = TouchLetter;
//# sourceMappingURL=TouchLetter.js.map