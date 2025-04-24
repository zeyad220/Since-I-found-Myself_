document.addEventListener('DOMContentLoaded', function() {
    const starfield = document.getElementById('starfield');
    const modal = document.getElementById('message-modal');
    const closeButton = document.querySelector('.close-button');
    const messageText = document.getElementById('message-text');
    const messageAuthor = document.getElementById('message-author');
    
    // Love messages data
    const messages = [
        { message: "I’ll be your soldier, fighting every second of the day for your dreams.", author: "" },
        { message: "If I had to dream up the perfect woman, she wouldn’t even come close to you.", author: "" },
        { message: "Like stars in the night sky, my love for you is infinite.", author: "" },
        { message: "أحببتك، لأنك جعلت من العادي شيئًا لا يُنسى", author: "" },
        { message: "I found home in your eyes.", author: "" },
        { message: "لازلت اندهش عند رؤيتك رغم مجيئك في كل مرة بنفس الملامح", author: "" },
        { message: "You complete me.", author: "" },
        { message: "أنتِ لا تُشبهين أحدًا… ولهذا أحببتكِ", author: "" },
        { message: "She walks in beauty, like the night.", author: "" },
        { message: "To me, you are perfect.", author: "" },
        { message: "You are the best thing that’s ever been mine.", author: "" },
        { message: "I just wanna hold you close, feel your heart so close to mine.", author: "" },
        { message: "In this endless universe, you're my constant star.", author: "" }
    ];

    // Create stars
    function createStars() {
        console.log("Creating stars...");
        const numberOfStars = Math.min(window.innerWidth * 0.15, 100); // Responsive number of stars
        starfield.innerHTML = ''; // Clear existing stars

        for (let i = 0; i < numberOfStars; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            
            // Ensure stars are large enough to be clickable
            star.style.width = '6px';
            star.style.height = '6px';
            
            // Random position
            const x = Math.random() * 95; // Keep away from edges
            const y = Math.random() * 95;
            
            star.style.left = x + '%';
            star.style.top = y + '%';
            
            // Random delay for twinkling animation
            star.style.animationDelay = Math.random() * 2 + 's';
            
            // Add click event with debug logging
            star.addEventListener('click', function(e) {
                console.log("Star clicked!");
                e.stopPropagation(); // Prevent event bubbling
                showMessage(i % messages.length);
            });
            
            starfield.appendChild(star);
        }
        
        console.log(`Created ${numberOfStars} stars`);
    }

    // Show message modal
    function showMessage(index) {
        console.log(`Showing message ${index}: ${messages[index].message}`);
        messageText.textContent = messages[index].message;
        messageAuthor.textContent = `- ${messages[index].author}`;
        modal.style.display = 'block';
    }

    // Close modal
    function closeModal() {
        console.log("Closing modal");
        modal.style.display = 'none';
    }

    // Event listeners
    closeButton.addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) closeModal();
    });

    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(createStars, 250);
    });

    // Initial star creation
    createStars();
    console.log("Initialization complete");

    function updateLoveCounter() {
        const startDate = new Date("2023-07-23T00:00:00");
        const now = new Date();
    
        let totalSeconds = Math.floor((now - startDate) / 1000);
    
        const years = Math.floor(totalSeconds / (365 * 24 * 3600));
        totalSeconds %= 365 * 24 * 3600;
    
        const months = Math.floor(totalSeconds / (30 * 24 * 3600));
        totalSeconds %= 30 * 24 * 3600;
    
        const days = Math.floor(totalSeconds / (24 * 3600));
        totalSeconds %= 24 * 3600;
    
        const hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
    
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
    
        const counterText = `${years}y ${months}m ${days}d ${hours}h ${minutes}m ${seconds}s`;
    
        document.getElementById("counter").textContent = counterText;
      }
    
      // Start counter immediately and update every second
      updateLoveCounter();
      setInterval(updateLoveCounter, 1000);
});
