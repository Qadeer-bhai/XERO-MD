//Owner and Developer= Qadeer
//For More detail Please Contact me on WhatsApp
//Qadeer = 923079749129


const util = require('util');
const fs = require('fs-extra');
const { ezra } = require(__dirname + "/../fredi/ezra");
const { format } = require(__dirname + "/../fredi/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const Taphere = more.repeat(4001)

ezra({ nomCom: "99-name", categorie: "Menu" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../fredi//ezra");
    var coms = {};
    var mode = "public";
    
    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }


    

    cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault("Asia/Karachi");

// Créer une date et une heure en PKT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

let infoMsg =  `

🤲🕌  ┈• *99 NAMES OF ALLAH* •┈  🕌🤲


1. Ar-Rahman (الرَّحْمٰنُ) - بے حد مہربان


2. Ar-Rahim (الرَّحِيمُ) - ہمیشہ رحم فرمانے والا


3. Al-Malik (الْمَلِكُ) - بادشاہ، ہر چیز کا مالک


4. Al-Quddus (الْقُدُّوسُ) - نہایت مقدس، ہر نقص سے پاک


5. As-Salam (السَّلَامُ) - سلامتی دینے والا


6. Al-Mu’min (الْمُؤْمِنُ) - امن اور ایمان عطا کرنے والا


7. Al-Muhaymin (الْمُهَيْمِنُ) - نگہبان، حفاظت فرمانے والا


8. Al-Aziz (الْعَزِيزُ) - زبردست، سب پر غالب


9. Al-Jabbar (الْجَبَّارُ) - سب پر غالب، اصلاح کرنے والا


10. Al-Mutakabbir (الْمُتَكَبِّرُ) - بڑائی والا


11. Al-Khaliq (الْخَالِقُ) - پیدا کرنے والا


12. Al-Bari (الْبَارِئُ) - درست بنانے والا


13. Al-Musawwir (الْمُصَوِّرُ) - صورتیں بنانے والا


14. Al-Ghaffar (الْغَفَّارُ) - بہت زیادہ بخشنے والا


15. Al-Qahhar (الْقَهَّارُ) - سب پر غالب، زبردست


16. Al-Wahhab (الْوَهَّابُ) - بہت زیادہ عطا کرنے والا


17. Ar-Razzaq (الرَّزَّاقُ) - سب کو رزق دینے والا


18. Al-Fattah (الْفَتَّاحُ) - فیصلہ فرمانے والا


19. Al-Alim (اَلْعَلِيْمُ) - سب کچھ جاننے والا


20. Al-Qabid (الْقَابِضُ) - قبضہ میں رکھنے والا


21. Al-Basit (الْبَاسِطُ) - کشادگی دینے والا


22. Al-Khafid (الْخَافِضُ) - نیچا کرنے والا


23. Ar-Rafi (الرَّافِعُ) - بلند کرنے والا


24. Al-Muizz (الْمُعِزُّ) - عزت دینے والا


25. Al-Mudhill (المُذِلُّ) - ذلت دینے والا


26. As-Sami (السَّمِيعُ) - سب کچھ سننے والا


27. Al-Basir (الْبَصِيرُ) - سب کچھ دیکھنے والا


28. Al-Hakam (الْحَكَمُ) - سب سے بہتر فیصلہ کرنے والا


29. Al-Adl (الْعَدْلُ) - انصاف کرنے والا


30. Al-Latif (اللَّطِيفُ) - بہت زیادہ مہربان


31. Al-Khabir (الْخَبِيرُ) - ہر چیز سے باخبر


32. Al-Halim (الْحَلِيمُ) - بردبار، تحمل والا


33. Al-Azim (الْعَظِيمُ) - نہایت عظمت والا


34. Al-Ghaffur (الغَفُورُ) - بار بار بخشنے والا


35. Ash-Shakur (الشَّكُورُ) - قدردان، نیکی کا صلہ دینے والا


36. Al-Aliyy (العَلِيُّ) - بلند و برتر


37. Al-Kabir (الكَبِيرُ) - سب سے بڑا


38. Al-Hafiz (الحَفِيظُ) - سب کی حفاظت فرمانے والا


39. Al-Muqit (المُقِيتُ) - ہر چیز کو قوت دینے والا


40. Al-Hasib (الحسِيبُ) - حساب لینے والا


41. Al-Jalil (الجَلِيلُ) - نہایت بزرگی والا


42. Al-Karim (الكَرِيمُ) - سب سے زیادہ کرم کرنے والا


43. Ar-Raqib (الرَّقِيبُ) - ہر چیز پر نگہبانی کرنے والا


44. Al-Mujib (المُجِيبُ) - دعا قبول کرنے والا


45. Al-Wasi (الْوَاسِعُ) - بڑی وسعت والا


46. Al-Hakim (الحَكِيمُ) - حکمت والا


47. Al-Wadud (الوَدُودُ) - نہایت محبت کرنے والا


48. Al-Majid (المَجِيدُ) - بزرگی اور عظمت والا


49. Al-Ba’ith (البَاعِثُ) - مردوں کو زندہ کرنے والا


50. Ash-Shahid (الشَّهِيدُ) - سب کچھ دیکھنے والا


51. Al-Haqq (الحَقُّ) - سچا، حق پر قائم


52. Al-Wakil (الوَكِيلُ) - سب معاملات کا نگران


53. Al-Qawiyy (القَوِيُّ) - سب سے زیادہ طاقتور


54. Al-Matin (المَتِينُ) - مضبوط، مستحکم


55. Al-Waliyy (الوَلِيُّ) - سب سے بہتر دوست اور مددگار


56. Al-Hamid (الحَمِيدُ) - لائقِ حمد و ثنا


57. Al-Muhsi (المُحْصِي) - سب کا شمار رکھنے والا


58. Al-Mubdi (المُبْدِئُ) - سب سے پہلے پیدا کرنے والا


59. Al-Muid (المُعِيدُ) - پھر سے زندگی دینے والا


60. Al-Muhyi (المُحْيِي) - زندگی دینے والا


61. Al-Mumit (المُمِيتُ) - موت دینے والا


62. Al-Hayy (الحَيُّ) - ہمیشہ زندہ رہنے والا


63. Al-Qayyum (القَيُّومُ) - سب کو قائم رکھنے والا


64. Al-Wajid (الوَاجِدُ) - ہمیشہ پانے والا


65. Al-Majid (المَاجِدُ) - بزرگی اور شرف والا


66. Al-Wahid (الوَاحِدُ) - اکیلا، یکتا


67. Al-Ahad (الأَحَدُ) - بے مثل، بے نظیر


68. As-Samad (الصَّمَدُ) - بے نیاز


69. Al-Qadir (القَادِرُ) - قدرت رکھنے والا


70. Al-Muqtadir (المُقْتَدِرُ) - زبردست قوت والا


71. Al-Muqaddim (المُقَدِّمُ) - جسے چاہے آگے بڑھائے


72. Al-Muakhkhir (المُؤَخِّرُ) - جسے چاہے پیچھے کرے


73. Al-Awwal (الأَوَّلُ) - سب سے پہلا


74. Al-Akhir (الآخِرُ) - سب سے آخر


75. Az-Zahir (الظَّاهِرُ) - ظاہر و نمایاں


76. Al-Batin (البَاطِنُ) - پوشیدہ، مخفی


77. Al-Wali (الوَالِي) - ہر چیز پر حکمرانی کرنے والا


78. Al-Muta’ali (المُتَعَالِي) - بلند و برتر


79. Al-Barr (البَرُّ) - بھلائی کرنے والا


80. At-Tawwab (التَّوَّابُ) - توبہ قبول کرنے والا


81. Al-Muntaqim (المُنْتَقِمُ) - بدلہ لینے والا


82. Al-Afuww (العَفُوُّ) - معاف کرنے والا


83. Ar-Ra’uf (الرَّؤُوفُ) - بہت زیادہ مہربان


84. Malik-ul-Mulk (مَالِكُ ٱلْمُلْكِ) - تمام سلطنت کا مالک


85. Dhul-Jalali wal-Ikram (ذُو ٱلْجَلَالِ وَالإكْرَامِ) - عظمت اور بزرگی والا


86. Al-Muqsit (المُقْسِطُ) - انصاف کرنے والا


87. Al-Jami (الجَامِعُ) - سب کو اکٹھا کرنے والا


88. Al-Ghaniyy (الغَنِيُّ) - بے نیاز


89. Al-Mughni (المُغْنِي) - کفایت کرنے والا


90. Al-Mani (المَانِعُ) - روکنے والا


91. Ad-Darr (الضَّارُ) - نقصان پہنچانے والا (بطور آزمائش)


92. An-Nafi (النَّافِعُ) - نفع پہنچانے والا


93. An-Nur (النُّورُ) - روشنی دینے والا


94. Al-Hadi (الهَادِي) - راہ دکھانے والا


95. Al-Badi (البَدِيعُ) - بے مثال، انوکھا


96. Al-Baqi (البَاقِي) - ہمیشہ باقی رہنے والا


97. Al-Warith (الوَارِثُ) - سب کا وارث


98. As-Sabur (الصَّبُورُ) - نہایت صبر کرنے والا


99. Ar-Rashid (الرَّشِيدُ) - صحیح راستہ دکھانے والا`;
    
let menuMsg = `
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
> *POWERED BY XERO MD*

> ©Qadeer & Abbas

> This Menu is Developed by Only Qadeer and i am owner of this menu☺
> XERO KHAN & QADEER KHAN

 `;

       try {
        const senderName = nomAuteurMessage || message.from;  // Use correct variable for sender name
        await zk.sendMessage(dest, {
            text: infoMsg + menuMsg,
            contextInfo: {
                mentionedJid: [senderName],
                externalAdReply: {
                    title: "یہ رہی اللہ تعالیٰ کے 99 اسمائے حسنیٰ کی مکمل فہرست",
                    body: "Live with God my friends you don't know your tomorrow",
                    thumbnailUrl: "https://qu.ax/FUjBe.jpg",
                    sourceUrl: "https://whatsapp.com/channel/0029VawgPgAGpLHPOHIIkO0Z",
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        });
    } catch (error) {
        console.error("Menu error: ", error);
        repondre("🥵🥵 Menu error: " + error);
    }
});
