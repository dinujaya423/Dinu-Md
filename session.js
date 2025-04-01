  
//══════════════════════════════════════════════════════════════════════════════════════════════════════//


//*
//  * @project_name :𝚂𝚁_𝙳𝙸𝙽𝚄_𝙼𝙳
//  * @version      : 1.0
//  * @author       : Dinujaya
//  * @Owner      : 𝚂𝚁_𝙳𝙸𝙽𝚄
//  * @description  : 𝚂𝚁_𝙳𝙸𝙽𝚄_𝙼𝙳, A Multi-functional WhatsApp bot created by Dinujaya
//*
//*
//Base by dinujaya
//GitHub: @dinujaya423
//WhatsApp: +94740026280
//   * Created By GitHub: Dinujaya423
//   * Credit To Dinu-Md
//   * © 2025 𝚂𝚁_𝙳𝙸𝙽𝚄_𝙼𝙳


const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Your session id here",
SUDO: process.env.SUDO || ["94740026280","94740026280"],
PORT: process.env.PORT || "8000",
FOOTER: process.env.FOOTER || "> Dinu-Md\n> Developed by Dinu\n> GitHub Repository: https://github.com/dinujaya423/SR-TECH-DINU\n🌟 Premium Version | Advanced Features | Secure & Reliable 🌟\n© 2025 𝚂𝚁_𝙳𝙸𝙽𝚄_𝙼𝙳. All rights reserved.",
};
