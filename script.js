function calculateDays() {
    const birthdateInput = document.getElementById('birthdate').value;
    const messageElement = document.getElementById('message');

    if (!birthdateInput) {
        messageElement.style.color = 'red';
        messageElement.textContent = 'Пожалуйста, введите дату.';
        return;
    }

    const birthdate = new Date(birthdateInput);
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    birthdate.setFullYear(currentYear);

    if (birthdate < currentDate) {
        birthdate.setFullYear(currentYear + 1);
    }

    const daysLeft = Math.ceil((birthdate - currentDate) / (1000 * 60 * 60 * 24));
    const dayWord = getDayWord(daysLeft);

    messageElement.style.color = 'black';
    messageElement.textContent = `До вашего дня рождения осталось ${daysLeft} ${dayWord}.`;
}

function getDayWord(days) {
    if (days % 10 === 1 && days % 100 !== 11) {
        return 'день';
    } else if ([2, 3, 4].includes(days % 10) && ![12, 13, 14].includes(days % 100)) {
        return 'дня';
    } else {
        return 'дней';
    }
}
