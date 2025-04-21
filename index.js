const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// יצירת קליינט עם שמירת session בלוקלית
const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        headless: true,
        args: ['--no-sandbox']
    }
});

// הדפסת QR Code לסריקה
client.on('qr', (qr) => {
    console.log('QR CODE:');
    qrcode.generate(qr, { small: true });
});

// התחברות
client.on('ready', () => {
    console.log('✅ Client is ready!');
});

// התחלת הבוט
client.initialize();
