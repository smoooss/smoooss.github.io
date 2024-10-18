$(document).ready(function(){


    let openContent = null; // 현재 열려 있는 콘텐츠
    let currentPage = 1; // 현재 페이지
    const titlesPerPage = 10; // 페이지당 타이틀 수
    let searchQuery = ''; // 검색어를 저장하는 변수

    // 페이지 로드 시 첫 10개 타이틀만 보이도록 설정
    function showTitles(page) {
        $('.title').hide(); // 모든 타이틀 숨김
        const filteredTitles = $('.title').filter(function() {
            return $(this).find('span').text().toLowerCase().includes(searchQuery);
            // 타이틀의 텍스트를 소문자로 변환한 후 검색어에 포함되면 표시
            // .filter 안에 return을 사용하면 ture 또는 false로 값을 반환해 줌
        });

        const start = (page - 1) * titlesPerPage;
        const end = start + titlesPerPage;
        filteredTitles.slice(start, end).show(); // 해당 페이지 타이틀만 표시

        // 페이지 슬라이드 작동 조건
        if (filteredTitles.length <= titlesPerPage) { // 필터링 된 타이틀의 개수가 전체 타이틀의 개수보다 작거나 같을 경우
            currentPage = 1; // 필터링 된 현재 페이지를 1로 리셋
            $('#prev').prop('disabled', true); // 비활성화
            $('#next').prop('disabled', true); // 비활성화
        } else {
            $('#prev').prop('disabled', page === 1);
            $('#next').prop('disabled', page === Math.ceil(filteredTitles.length / titlesPerPage));
        }
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
            openContent.slideUp();
        }

        // 클릭된 타이틀의 콘텐츠를 slideDown()
        content.slideDown();
        openContent = content; // 현재 열려 있는 콘텐츠로 업데이트
    });

    // 검색창 클릭 시 이벤트 전파 방지
    $('.search-container').click(function(event) {
        event.stopPropagation(); // 콘텐츠 슬라이드업 방지
    });

    // main 영역 클릭 시 열려 있는 콘텐츠를 slideUp()
    $('main').click(function() {
        if (openContent) {
            openContent.slideUp();
            openContent = null; // 열려 있는 콘텐츠 초기화
        }
    });

    // 다음 페이지로 이동
    $('#next').click(function() {
        if (currentPage < Math.ceil($('.title').filter(function() {
            return $(this).find('span').text().toLowerCase().includes(searchQuery);
        }).length / titlesPerPage)) {
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

    // 검색 기능 추가
    function highlightTitles() {
        searchQuery = $('#search').val().toLowerCase(); // 입력된 검색어
        currentPage = 1; // 검색 시 페이지를 첫 페이지로 리셋
        showTitles(currentPage); // 검색어에 따라 제목 표시
    }

    // 검색 버튼 클릭 시 하이라이트 적용
    $('#search-btn').click(highlightTitles);

    // 엔터 키 입력 시 하이라이트 적용
    $('#search').on('keypress', function(event) {
        if (event.which === 13) { // Enter 키가 눌렸을 때
            event.preventDefault(); // 기본 동작 방지
            highlightTitles();
        }
    });

});
