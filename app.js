function calculateAge() {  
    const birthDateInput = document.getElementById('birthDate').value;  
    const result = document.getElementById('result');  

    if (!birthDateInput) {  
        result.textContent = "Please enter your birth date.";  
        return;  
    }  

    const birthDate = new Date(birthDateInput);  
    const today = new Date();  
    let age = today.getFullYear() - birthDate.getFullYear();  
    const monthDiff = today.getMonth() - birthDate.getMonth();  

    // Adjust age if the birthday has not occurred yet this year  
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {  
        age--;  
    }  

    result.textContent = `You are ${age} years old.`;  
}  