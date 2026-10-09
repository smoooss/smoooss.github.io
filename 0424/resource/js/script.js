document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */
    const revealElements =
        document.querySelectorAll(".reveal");

    const revealObserver =
        new IntersectionObserver(
            
            function (entries, observer) {
                entries.forEach(function (entry) {

                    if (!entry.isIntersecting) { return; }
                    
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
        );
    revealElements.forEach(function (element) {
        revealObserver.observe(element);
    });



    /* =====================================================
       HERO PARALLAX
    ===================================================== */
    const hero = document.querySelector(".hero");
    const heroImage = document.querySelector(".hero-image");

    let parallaxTicking = false;

    function updateParallax() {

        if (!heroImage) { return; }
        const rect = hero.getBoundingClientRect();
        if ( rect.bottom < 0 || rect.top > window.innerHeight ) {
            parallaxTicking = false;
            return;
        }

        const movement = Math.max( -20, Math.min( 20, -rect.top * .08 ));
        heroImage.style.transform = `translate3d(0, ${movement}px, 0) scale(1.04)`;
        parallaxTicking = false;
    }

    window.addEventListener("scroll", function () {
            if (!parallaxTicking) {
                requestAnimationFrame( updateParallax );
                parallaxTicking = true;
            }
        }, { passive: true }
    );



    /* =====================================================
       HERO TOUCH / MOUSE

    if (hero) {

        hero.addEventListener(
            "pointermove",
            function (event) {

                if (
                    window.innerWidth <= 700
                ) {
                    return;
                }


                const rect =
                    hero.getBoundingClientRect();


                const x =
                    (
                        event.clientX -
                        rect.left
                    ) /
                    rect.width -
                    .5;


                const y =
                    (
                        event.clientY -
                        rect.top
                    ) /
                    rect.height -
                    .5;


                heroImage.style.transform =
                    `
                    translate3d(
                        ${x * -10}px,
                        ${y * -10}px,
                        0
                    )
                    scale(1.04)
                    `;

            }
        );


        hero.addEventListener(
            "pointerleave",
            function () {

                heroImage.style.transform =
                    `
                    translate3d(0,0,0)
                    scale(1.04)
                    `;

            }
        );

    }
    ===================================================== */



    /* =====================================================
        HEART RIBBON SVG DRAWING
    ===================================================== */

    const ribbon = document.querySelector(".draw-ribbon");

    if (ribbon) {
        const paths = ribbon.querySelectorAll(".draw-path");

        /* SVG PATH 초기화 */
        paths.forEach(function (path) {
            const length = path.getTotalLength();

            path.style.strokeDasharray = length;
            path.style.strokeDashoffset = length;
        });

        /* 스크롤 진입 감지 */
        const ribbonObserver =
            new IntersectionObserver(

                function (entries, observer) {
                    entries.forEach(function (entry) {

                        if (!entry.isIntersecting) { return; }

                        /* 드로잉 시작 */
                        paths.forEach(function (path, index) {
                            const length = path.getTotalLength();

                            /* 두 개의 리본이 시간차로 시작 */
                            setTimeout(function () {
                                path.style.transition = "stroke-dashoffset 2.2s cubic-bezier(.65, 0, .35, 1)";
                                path.style.strokeDashoffset = "0";
                            }, index * 150);
                        });

                        /* 한 번만 실행 */
                        observer.unobserve( entry.target );
                    });
                }, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
            );
        ribbonObserver.observe( ribbon );
    }



    /* =====================================================
       COUNTDOWN
    ===================================================== */

    const weddingDate = new Date( "2027-04-24T17:00:00+09:00" ).getTime();

    function updateCountdown() {
        let distance = weddingDate - Date.now();

        if (distance < 0) { distance = 0; }

        const days = Math.floor( distance / (1000 * 60 * 60 * 24) );
        const hours = Math.floor( (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) );
        const minutes = Math.floor( (distance % (1000 * 60 * 60)) / (1000 * 60) );
        const seconds = Math.floor( (distance % (1000 * 60)) / 1000 );

        document.getElementById( "days" ).textContent = String(days).padStart(2, "0");
        document.getElementById( "hours" ).textContent = String(hours).padStart(2, "0");
        document.getElementById( "minutes" ).textContent = String(minutes).padStart(2, "0");
        document.getElementById( "seconds" ).textContent = String(seconds).padStart(2, "0");
    }
    updateCountdown();

    setInterval( updateCountdown, 1000 );



    /* =====================================================
       GALLERY MODAL
    ===================================================== */
    const galleryItems = document.querySelectorAll( ".gallery-item" );
    const imageModal = document.getElementById( "imageModal" );
    const modalImage = document.getElementById( "modalImage" );
    const modalClose = document.getElementById( "modalClose" );
    const modalPrev = document.getElementById( "modalPrev" );
    const modalNext = document.getElementById( "modalNext" );
    const currentImage = document.getElementById( "currentImage" );
    const totalImage = document.getElementById( "totalImage" );

    let currentIndex = 0;

    totalImage.textContent = String( galleryItems.length ).padStart(2, "0");

    function showImage(index) {

        if (index < 0) { index = galleryItems.length - 1; }
        if (index >= galleryItems.length) { index = 0; }
        currentIndex = index;

        const image = galleryItems[ currentIndex ].querySelector("img");
        modalImage.src = image.src;
        modalImage.alt = image.alt;
        currentImage.textContent = String( currentIndex + 1 ).padStart(2, "0");
    }

    function openModal(index) {
        showImage(index);
        imageModal.classList.add( "active" );
        document.body.classList.add( "modal-open" );
    }
    function closeModal() {
        imageModal.classList.remove( "active" );
        document.body.classList.remove( "modal-open" );
    }

    galleryItems.forEach(function (item, index) {
        item.addEventListener( "click", function () {
            openModal(index); });
        }
    );
    modalClose.addEventListener( "click", closeModal );
    modalPrev.addEventListener( "click", function () {
        showImage( currentIndex - 1 );
    });
    modalNext.addEventListener( "click", function () {
        showImage( currentIndex + 1 );
    });
    imageModal.addEventListener( "click", function (event) {
        if ( event.target === imageModal ) { closeModal(); }
    });



    /* =====================================================
       GALLERY SWIPE
    ===================================================== */
    let startX = 0;
    let startY = 0;

    imageModal.addEventListener( "touchstart", function (event) {

            const touch = event.changedTouches[0];
            startX = touch.screenX;
            startY = touch.screenY;

        }, { passive: true }
    );
    imageModal.addEventListener( "touchend", function (event) {

            const touch = event.changedTouches[0];
            const diffX = startX - touch.screenX;
            const diffY = startY - touch.screenY;

            if ( Math.abs(diffY) > Math.abs(diffX) ) { return; }
            if ( Math.abs(diffX) < 50 ) { return; }
            if (diffX > 0) { showImage( currentIndex + 1 ); }
            else { showImage( currentIndex - 1 ); }

        }, { passive: true }
    );



    /* =====================================================
       ESC
    ===================================================== */
    document.addEventListener( "keydown", function (event) {

        if ( !imageModal.classList.contains( "active" ) ) { return; }
        if ( event.key === "Escape" ) { closeModal(); }
        if ( event.key === "ArrowLeft" ) { showImage( currentIndex - 1 ); }
        if ( event.key === "ArrowRight" ) { showImage( currentIndex + 1 ); }
        }
    );



    /* =====================================================
        ADDRESS COPY
    ===================================================== */
    const addressButtons = document.querySelectorAll(".copy-address");
    addressButtons.forEach(function (button) {

        button.addEventListener("click", async function () {

            const address = button.dataset.address;

            try {
                await navigator.clipboard.writeText(address);
                showToast("주소가 복사되었습니다.");

            } catch (error) {

                const textarea = document.createElement("textarea");
                textarea.value = address;

                document.body.appendChild(textarea);
                textarea.select();

                document.execCommand("copy");
                textarea.remove();
                showToast("주소가 복사되었습니다.");
            }
        });
    });



    /* =====================================================
       ACCOUNT COPY
    ===================================================== */
    const copyButtons = document.querySelectorAll( ".copy-account" );
    const toast = document.getElementById( "toast" );

    copyButtons.forEach( function (button) {

        button.addEventListener( "click", async function () {

            const account = button.dataset.account;

                try {
                    await navigator.clipboard.writeText( account );
                    showToast( "계좌번호가 복사되었습니다." );

                } catch (error) {

                    const textarea = document.createElement( "textarea" );
                    textarea.value = account;

                    document.body.appendChild( textarea );
                    textarea.select();

                    document.execCommand( "copy" );
                    textarea.remove();
                    showToast( "계좌번호가 복사되었습니다." );
                }
            });
        }
    );



    /* =====================================================
       TOAST
    ===================================================== */
    function showToast(message) {

        toast.textContent = message;
        toast.classList.add( "active" );

        clearTimeout( showToast.timer );
        showToast.timer = setTimeout( function () {
            toast.classList.remove( "active" ); }, 2000 );
    }



    /* =====================================================
       MUSIC
    ===================================================== */
    const music = document.getElementById( "bgMusic" );
    const musicButton = document.getElementById( "musicButton" );

    let musicPlaying = false;

    musicButton.addEventListener( "click", function () {

            if (!musicPlaying) {
                music.play().then( function () {
                    musicPlaying = true;
                    musicButton.classList.add( "playing" );
                })
                .catch( function () {
                    showToast( "음악을 재생할 수 없습니다." ); }
                );
            } else {
                music.pause();
                musicPlaying = false;
                musicButton.classList.remove( "playing" );
            }
        }
    );



    /* =====================================================
       SHARE
    ===================================================== */
    const shareButton = document.getElementById( "shareButton" );

    shareButton.addEventListener( "click", async function () {

            const shareData = {
                title: "동엽 ♥ 상미 결혼식",
                text: "소중한 분들을 결혼식에 초대합니다.",
                url: window.location.href
            };

            if ( navigator.share ) {
                try {
                    await navigator.share( shareData );

                } catch (error) { return; }
                return;
            }

            try {
                await navigator.clipboard.writeText( window.location.href );
                showToast( "청첩장 주소가 복사되었습니다." );
            } catch (error) {
                showToast( "주소를 복사할 수 없습니다." );
            }
        }
    );



    /* =====================================================
       RSVP
    ===================================================== */
    const rsvpButton = document.getElementById( "rsvpButton" );

    rsvpButton.addEventListener( "click", function () {
        /* 실제 RSVP 페이지가 생기면 이 부분만 연결하면 됩니다. */
        showToast( "참석 여부 전달 페이지를 연결해주세요." ); }
    );



    /* =====================================================
       PARTICLE
    ===================================================== */
    const canvas = document.getElementById( "particleCanvas" );
    const ctx = canvas.getContext("2d");

    let particles = [];

    function resizeCanvas() {

        const ratio = Math.min( window.devicePixelRatio || 1, 2 );
        canvas.width = window.innerWidth * ratio;
        canvas.height = window.innerHeight * ratio;
        canvas.style.width = window.innerWidth + "px";
        canvas.style.height = window.innerHeight + "px";
        ctx.setTransform( ratio, 0, 0, ratio, 0, 0 );
        createParticles();
    }

    function createParticles() {

        particles = [];

        const count = window.innerWidth < 430 ? 12 : 18;

        for ( let i = 0; i < count; i++ ) {

            particles.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                size: Math.random() * 2 + .8,
                speed: Math.random() * .15 + .05,
                drift: Math.random() * .15 - .075,
                opacity: Math.random() * .18 + .04
            });
        }
    }

    function animateParticles() {

        ctx.clearRect( 0, 0, window.innerWidth, window.innerHeight );

        particles.forEach(

            function (particle) {

                particle.y -= particle.speed;
                particle.x += particle.drift;

                if ( particle.y < -10 ) { particle.y = window.innerHeight + 10; }

                ctx.beginPath();
                ctx.arc( particle.x, particle.y, particle.size, 0, Math.PI * 2 );
                ctx.fillStyle = `rgba( 255, 255, 255, ${particle.opacity} )`;
                ctx.fill();
            }
        );
        requestAnimationFrame( animateParticles );
    }

    resizeCanvas();

    animateParticles();

    window.addEventListener( "resize", resizeCanvas );



    /* =====================================================
       PAGE SHOW
    ===================================================== */
    window.addEventListener( "pageshow", function () {
            imageModal.classList.remove( "active" );
            document.body.classList.remove( "modal-open" );
        }
    );

    
});