<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Services\UrlService;

class UrlFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $url = new UrlService("https://testpage.ru/".$this->faker->title(). '/' . $this->faker->name());

        return [
            'original_url' => "https://testpage.ru/".$this->faker->title(). '/' . $this->faker->name(),
            'short_url' => $url->generate_url(6)
        ];
    }
}
