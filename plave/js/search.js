$(document).ready(function () {
    
    const titlesPerPage = 10; // 페이지 당 타이틀 개수
    let currentPage = 1; // 페이지 넘버
    let filteredTitles = $(".title"); // 초기에는 모든 타이틀을 포함

    // 페이지 정보 업데이트
    function updatePageInfo() {
        const totalPages = Math.ceil(filteredTitles.length / titlesPerPage); // 검색어가 필터링 된 타이틀을 기준으로 페이지 업데이트
        $("#pageInfo").text(currentPage + " / " + totalPages); // 페이지 개수 표시
        $("#prev").prop("disabled", currentPage === 1);
        $("#next").prop("disabled", currentPage === totalPages);
    }

    function showPage(page) {
        const start = (page - 1) * titlesPerPage; // 시작 페이지
        const end = start + titlesPerPage; // 마지막 페이지
        $(".title").hide(); // 모든 타이틀 숨기고
        filteredTitles.slice(start, end).show(); // 시작과 마지막 페이지 범위의 타이틀만 표시
        updatePageInfo(); // 페이지 정보 업데이트
    }

    function resetPagination() {
        currentPage = 1; // currentPage 변수를 1로 초기화하여 첫 페이지로 이동
        showPage(currentPage); // 첫 페이지를 화면에 표시하기 위해 showPage 함수 호출
    }

    // 초기 화면 설정
    showPage(currentPage);

    // 타이틀 클릭 시
    $(".title").click(function (event) {
        event.stopPropagation(); // 이벤트 부모 요소 전파 방지
        var $content = $(this).find(".content"); // 클릭된 title의 content 찾기

        if (!$content.is(":visible")) { // content가 보이지 않는 경우
            $(".content").slideUp(); // 모든 content 숨기기
            $content.slideDown(); // 찾은 content 보이기
        }
    });
    
    // 검색창 클릭 시 이벤트 전파 방지
    $('.search-container').on("click", function (event) {
        event.stopPropagation(); // 콘텐츠 슬라이드업 방지
    });

    // main 클릭 시 모든 content 닫기
    $("main").on("click", function () {
        $(".content").slideUp();
    });

    // 이전 버튼 클릭 시
    $("#prev").click(function () {
        if (currentPage > 1) { // 현재 페이지가 2 이상일 때
            currentPage--; // 감소
            showPage(currentPage); // 감소된 페이지 보이기
        }
    });

    // 다음 버튼 클릭 시
    $("#next").click(function () {
        const totalPages = Math.ceil(filteredTitles.length / titlesPerPage); // 필터링 된 title 개수를 10개로 나누어 전체 페이지 수 재설정
        if (currentPage < totalPages) { // 현재 페이지가 전체 페이지보다 작을 경우
            currentPage++; // 증가
            showPage(currentPage); // 증가된 페이지 보이기
        }
    });

    // 검색 기능
    $("#search").on("keydown", function (event) {
        if (event.key === "Enter") { // 엔터키 눌렀을 때
            const query = $(this).val().toLowerCase(); // 검색어를 소문자로 변환
            $(".title").hide(); // 모든 타이틀 숨기기

            if (query === "") {
                filteredTitles = $(".title"); // 검색어가 없으면 모든 타이틀 보이기
            } else {
                filteredTitles = $(".title").filter(function () {
                    return $(this).text().toLowerCase().includes(query); // 소문자로 변환한 검색어가 포함된 title만 보이기
                });
            }
            resetPagination(); // 첫 페이지 보이기
        }
    });
});