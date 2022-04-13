<?php

namespace App\Services;

use App\Models\Urls;


class UrlService {

    protected $url;
    protected $short_url;

    public function __construct(string $url){
        $this->url = $url;
        $this->short_url = $this->makeUrlDB();
    }

    public static function getData($request){
        $data = Urls::orderByDesc('id')->take(5)->get();
        return [
            'host' => $request->getSchemeAndHttpHost(),
            'data' => $data
        ];
    }

    public static function goUrl($code) {
        $url = Urls::where('short_url', $code)->first();
        if($url){
            return redirect()->to($url->original_url);
        } else {
            return abort(404);
        }
    }

    public function addUrl($request){

        $old_elem = Urls::where('original_url', $this->url)->first();
        if($old_elem){
            return [
                'status' => 'success',
                'data' => [
                    'original_url' => $old_elem->original_url,
                    'short_url' => $old_elem->short_url,
                    'host' => $request->getSchemeAndHttpHost(),
                ]
            ];
        } else {

            $elem = Urls::create([
                'original_url' => $this->url,
                'short_url' => $this->short_url
            ]);

            $elem->save();

            return [
                'status' => 'success',
                'data' => [
                    'original_url' => $elem->original_url,
                    'short_url' => $elem->short_url,
                    'host' => $request->getSchemeAndHttpHost(),
                ]
            ];
        }

    }




    public function makeUrlDB(){
        return $this->generate_url(6);
    }


    public function generate_url(int $length){
        $list_symbols = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $list_length = strlen($list_symbols);
        $random_url = '';
        for($i = 0; $i < $length; $i++){
            $random_url .= $list_symbols[random_int(0, $list_length - 1)];
        }

        $duplicate = Urls::where("short_url", $random_url)->first();
        if($duplicate){
            return $this->generate_url(6);
        }

        return $random_url;
    }

}
