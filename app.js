function Read_Text(option) {
    const text1 = document.getElementById('text_1');
    const text2 = document.getElementById('text_2');
    const imageContainer = document.getElementById('div_image');
    const text2Container = document.getElementById('text_2_container');

    let result = "";
    if (text1.value === "") {
        alert("Ingrese el texto");
    } else {
        if (option === 1) {
            result = encryptText(text1.value);
        } else {
            result = decryptText(text1.value);
        }
        text1.value = "";
        text2.value = result;
        text2Container.style.display = "block";
        imageContainer.style.display = "none";
    }
}

function encryptText(text) {
    text = text.replace(/e/g, 'enter');
    text = text.replace(/i/g, 'imes');
    text = text.replace(/a/g, 'ai');
    text = text.replace(/o/g, 'ober');
    text = text.replace(/u/g, 'ufat');
    return text;
}

function decryptText(text) {
    text = text.replace(/enter/g, 'e');
    text = text.replace(/imes/g, 'i');
    text = text.replace(/ai/g, 'a');
    text = text.replace(/ober/g, 'o');
    text = text.replace(/ufat/g, 'u');
    return text;
}

function Copy() {
    const text2 = document.getElementById('text_2');
    const imageContainer = document.getElementById('div_image');
    if (text2.value === "") {
        alert("Ingrese el texto a copiar");
    } else {
        text2.select();
        try {
            document.execCommand('copy');
            alert('Texto copiado al portapapeles');
        } catch (err) {
            alert('No se pudo copiar el texto. Intenta manualmente.');
        }
        document.getElementById('text_1').value = "";
        text2.value = "";
        // imageContainer.style.display = "block";
    }
}

function Validate_Text(textarea) {
    let value = textarea.value;
    value = value.replace(/[^a-z0-9\s]/g, '');
    textarea.value = value;
}

document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.classList.add("inactive");

        button.addEventListener("click", function() {
            buttons.forEach(btn => {
                btn.classList.remove("active");
                btn.classList.add("inactive");
            });

            this.classList.remove("inactive");
            this.classList.add("active");
        });
    });
});
