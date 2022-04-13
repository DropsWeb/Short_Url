<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use App\Services\UrlService;
use Faker\Factory;
use App\Models\Urls;
use Tests\TestCase;

class UrlTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_getUrls()
    {
        $response = $this->get('/');
        $response->assertStatus(200);
    }

}
