$(document).ready(function(){


    let openContent = null; // 현재 열려 있는 콘텐츠
    let currentPage = 1; // 현재 페이지
    const titlesPerPage = 10; // 페이지당 타이틀 수
    const totalTitles = $('.title').length; // 전체 타이틀 수
    const totalPages = Math.ceil(totalTitles / titlesPerPage); // 전체 페이지 수

    // 페이지 로드 시 첫 10개 타이틀만 보이도록 설정
    function showTitles(page) {
        $('.title').hide(); // 모든 타이틀 숨김
        const start = (page - 1) * titlesPerPage;
        const end = start + titlesPerPage;
        $('.title').slice(start, end).show(); // 해당 페이지 타이틀만 표시
    }

    // 첫 페이지 로드 시 타이틀 10개 보여주기
    showTitles(currentPage);

    // 타이틀 클릭 시 슬라이드 동작
    $('.title').click(function(event) {
        event.stopPropagation(); // 부모 요소로 이벤트 전파 방지
        const content = $(this).find('.content'); // 클릭된 타이틀의 콘텐츠

        // 이미 열려 있는 콘텐츠라면 변화 없음
        if (content.is(openContent)) {
            return;
        }

        // 열려 있는 콘텐츠가 있으면 slideUp()
        if (openContent) {
            openContent.slideUp(300);
        }

        // 클릭된 타이틀의 콘텐츠를 slideDown()
        content.slideDown();
        openContent = content; // 현재 열려 있는 콘텐츠로 업데이트
    });

    // main 영역 클릭 시 열려 있는 콘텐츠를 slideUp()
    $('main').click(function() {
        if (openContent) {
            openContent.slideUp(300);
            openContent = null; // 열려 있는 콘텐츠 초기화
        }
    });

    // 다음 페이지로 이동
    $('#next').click(function() {
        if (currentPage < totalPages) {
            currentPage++;
            showTitles(currentPage);
        }
    });

    // 이전 페이지로 이동
    $('#prev').click(function() {
        if (currentPage > 1) {
            currentPage--;
            showTitles(currentPage);
        }
    });

    // 첫 페이지로 이동
    $('#first').click(function() {
        currentPage = 1;
        showTitles(currentPage);
    });

    // 마지막 페이지로 이동
    $('#last').click(function() {
        currentPage = totalPages;
        showTitles(currentPage);
    });

});