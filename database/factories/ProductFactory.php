<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        // $table->string('name');
        // $table->string('slug')->unique();
        // $table->text('description');
        // $table->integer('price')->default(0);

        $productNamesArray = ['Ordinateur', 'Portable', 'Microphone', 'Écouteurs', 'Clavier'];
        $productName = Arr::random($productNamesArray) . ' de la société ' . $this->faker->company;

        return [
            'name' => $productName,
            'slug' => Str::slug($productName),
            'description' => $this->faker->realText(150),
            'price' => $this->faker->numberBetween(3000, 30000)
        ];
    }
}
