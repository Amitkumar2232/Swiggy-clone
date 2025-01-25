
        const slider = document.getElementById('slider');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        prevBtn.addEventListener('click', () => {
            slider.scrollBy({ left: -200, behavior: 'smooth' });
        });

        nextBtn.addEventListener('click', () => {
            slider.scrollBy({ left: 200, behavior: 'smooth' });
        });

        slider.addEventListener('scroll', () => {
            prevBtn.disabled = slider.scrollLeft === 0;
        });