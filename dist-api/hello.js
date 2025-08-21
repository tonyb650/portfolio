"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = handler;
function handler(req, res) {
    const { name = 'World' } = req.query;
    return res.json({
        message: `Hello ${name}!`,
    });
}
