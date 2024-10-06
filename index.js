// This is a basic status changer plugin
setInterval(() => {
    const statuses = [
        "em",
        "my",
        "fav",
        "poopy🙄",
    ];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    console.log(`Changing status to: ${randomStatus}`);

    // Assuming you have the correct Vendetta method to change the status
    vendetta.api.status.set(randomStatus); // Use the correct method based on the Vendetta API
}, 1000);

