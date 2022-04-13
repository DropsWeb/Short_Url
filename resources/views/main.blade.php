<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="{{asset("js/app.js")}}"></script>
    <link rel="stylesheet" href="{{ asset("css/app.css") }}">
    <title>Laravel Short url service</title>
</head>
<body>
    <main>
        <div class="container">
            <section class="active">
                <h2>Введите ссылку, которую желаете сократить</h2>
                    <div class="error_container"></div>

                    <form action="" method="PUT" class="add_form" data-token="{{csrf_token()}}">
                        @csrf
                        <div class="input_block">
                            <input type="text" required name="url" placeholder="Введите ссылку">
                            <button type="submit">Применить</button>
                        </div>
                    </form>
            </section>
            <section class="info">
                <div class="result_block">
                    <h2>Копируйте сокращенную ссылку:</h2>
                    <div class="info_block">
                        <div class="info_block__url"></div>
                    </div>
                </div>

                <h3>Прошлые запросы:</h3>
                <div class="info_block">
                    @foreach ($data as $key=>$item)
                        <div class="info_block__url old">
                            <div class="info_block__url-block">
                                <label for="#info_value">Короткая ссылка</label>
                                <a class="info_block__url-block_value" href="{{$host}}/u/{{$item->short_url}}" target="_blank" id="info_value">{{$host}}/u/{{$item->short_url}}</a>
                            </div>
                            <div class="info_block__url-block ">
                                <label for="#original_value">Оригинальная ссылка</label>
                                <a class="info_block__url-block_value" href="{{$item->original_url}}" title="{{$item->original_url}}" target="_blank">{{$item->original_url}}</a>
                            </div>
                            <div class="info_block__url-block">
                                <div class="success_copy">
                                    Скопировано
                                </div>
                                <button class="copy_block" data-url="{{$host}}/u/{{$item->short_url}}">
                                    Копировать
                                </button>
                            </div>
                        </div>
                    @endforeach

                </div>
            </section>
        </div>
    </main>
</body>
</html>
