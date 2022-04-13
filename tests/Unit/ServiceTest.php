<?php

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;
use App\Services\UrlService;

class ServiceTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function test_makeShort()
    {
        $test_url = "https://webew.ru/articles/743.webew";
        $urlService = new UrlService($test_url);

        if(preg_match('/[0-9a-zA-Z]{6}/', $urlService->generate_url(6))){
            $this->assertTrue(true);
        } else {
            $this->assertFalse(false);
        }
    }

    public function test_makeUrlDB()
    {
        $test_url = "https://webew.ru/articles/743.webew";
        $urlService = new UrlService($test_url);
        $makeUrl = $urlService->makeUrlDB(6);

        if(preg_match('/[0-9a-zA-Z]{6}/', $makeUrl)){
            $this->assertTrue(true);
        } else {
            $this->assertFalse(false);
        }
    }
}
