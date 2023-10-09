const greet = (name) => {
    if(name === "Leora"){
        return  `Hello ${name}, thank you for joining the ${name} machine.`;
    } else if (name === "Rachelli"){
        return `${name}, please go to bed.`;
    }
}

const showGreeting = () => {
    const name = document.getElementById("nameSelector").value;
    const greeting = greet(name);
    document.getElementById("greetingText").innerHTML = greeting;
}
