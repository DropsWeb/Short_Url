document.addEventListener("DOMContentLoaded", function() {
    let form = document.querySelector(".add_form");
    let token = form.dataset.token;
    let err_block = document.querySelector(".error_container");
    let url_block = document.querySelector(".info_block__url");
    let result_block = document.querySelector(".result_block");
    let old_block = document.querySelectorAll(".old");

    old_block.forEach(item => {
        console.log(item)
        let button = item.querySelector(".copy_block");
        let success = item.querySelector(".success_copy");
        button.addEventListener('click', function() {
            let url = button.dataset.url;
            navigator.clipboard.writeText(url)
                .then(() => {
                    document.querySelectorAll(".success_copy").forEach(item => item.style.display = 'none');
                    success.style.display = "block";
                })
        })
    })


    form.addEventListener("submit", function(e) {
        err_block.style.display = "none";
        e.preventDefault();

        let form_data = new FormData(form);
        let data = {
            url: form_data.get('url')
        };

        fetch("/api/add_url", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'X-CSRF-Token': token
            },
            body: JSON.stringify(data)
        }).then(response => response.json()).then(result => {
            err_block.inneeText = '';
            if (result.status !== 'success') {
                err_block.style.display = "block";
                err_block.insertAdjacentHTML('afterbegin', `<div class="error_container__mess">Ошибка: ${result.url[0]}</div>`)
            } else {
                let short = result.data.short_url;
                let original = result.data.original_url;
                let host = result.data.host;
                url_block.innerText = '';
                url_block.insertAdjacentHTML('afterbegin',
                    `
                    <div class="info_block__url-block">
                        <label for="#info_value">Короткая ссылка</label>
                        <a class="info_block__url-block_value" href="${host}/u/${short}"  target="_blank" id="info_value">${host}/u/${short}</a>
                    </div>
                    <div class="info_block__url-block">
                        <label for="#original_value">Оригинальная ссылка</label>
                        <a class="info_block__url-block_value" href="${original}"  target="_blank" >${original}</a>
                    </div>
                    <div class="info_block__url-block">
                        <div class="success_copy">
                            Скопировано
                        </div>
                        <button id="short_copy" data-url="${host}/u/${short}">
                            Копировать
                        </button>
                    </div>
                `
                )
                result_block.style.display = "block";
                let copy = document.querySelector("#short_copy");
                let success = url_block.querySelector('.success_copy');
                copy.addEventListener("click", function() {
                    navigator.clipboard.writeText(`${host}/u/${short}`)
                        .then(() => {
                            document.querySelectorAll(".success_copy").forEach(item => item.style.display = 'none');
                            success.style.display = "block";
                        })
                })

            }
        })

        function copy_url($url) {
            console.log('copy')
        }


    })

})