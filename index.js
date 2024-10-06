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
    // Here you would set the Discord status using Vendetta's API (this is just a placeholder)
}, 1000);
