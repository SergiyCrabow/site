document.addEventListener("DOMContentLoaded", function() {
    const allButtons = document.querySelectorAll('button');
    allButtons.forEach(button => {
        button.addEventListener("mouseover", function() {
            button.style.transform = "scale(1.1)";
            button.style.transition = "transform 0.3s";
        });

        button.addEventListener("mouseout", function() {
            button.style.transform = "scale(1)";
        });
    });

    const signUpButton = document.querySelector("button");
    if (signUpButton) {
        signUpButton.addEventListener("click", function() {
            alert("Дякуємо за вашу зацікавленість! Ви будете перенаправлені на Google Форму.");
        });
    }
});
