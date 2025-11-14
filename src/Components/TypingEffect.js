import { useState, useEffect } from "react";

export default function TypingEffect({ words,
    typeSpeed = 100,
    deleteSpeed = 50,
    pauseTime = 1500, }) {
    const [displayedText, setDisplayedText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);



    useEffect(() => {
        const currentWord = words[wordIndex];

        const handleTyping = () => {
            if (isDeleting) {

                if (charIndex > 0) {
                    
                    setDisplayedText(currentWord.slice(0, charIndex - 1));
                    setCharIndex((prev) => prev - 1);
                } else {

                    setIsDeleting(false);
                    setWordIndex((prev) => (prev + 1) % words.length);
                }
            } else {
                if (charIndex < currentWord.length) {
                    // Continue typing
                    setDisplayedText(currentWord.slice(0, charIndex + 1));
                    setCharIndex((prev) => prev + 1);
                } else {
                    // Finished typing, start pausing
                    setTimeout(() => {
                        setIsDeleting(true);
                    }, pauseTime);
                }
            }
        };

        const speed = isDeleting ? deleteSpeed : typeSpeed;


        const timer = setTimeout(handleTyping, speed);


        return () => clearTimeout(timer);

    }, [
        charIndex,
        isDeleting,
        wordIndex,
        words,
        typeSpeed,
        deleteSpeed,
        pauseTime
    ]);

    return <h3>{displayedText}</h3>;
}