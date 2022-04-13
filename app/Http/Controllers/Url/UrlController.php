<?php

namespace App\Http\Controllers\Url;

use App\Http\Controllers\Controller;
use App\Services\UrlService;
use Illuminate\Http\Request;
use App\Http\Requests\UrlRequest;

class UrlController extends Controller {



    public function index(Request $request) {
        return view('main', UrlService::getData($request));
    }

    public function addUrl(UrlRequest $request){
        $url = new UrlService($request->url);
        return $url->addUrl($request);
    }

    public function changeUrl($code){
        return UrlService::goUrl($code);
    }
}
