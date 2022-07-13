<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Train;

class TrainSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $userFirst = \App\Models\User::where(['email' => 'jose@email.com'])->get()->first();
        
        Train::insert([
            [
                'name' => 'supino reto',
                'description' => 'descricao ....',
                'weight' => 20,
                'times_series' => 4,
                'repetitions' => 8,
                'user_id' => $userFirst->id
            ],
            [
                'name' => 'supino inclinado',
                'description' => 'descricao ....',
                'weight' => 10,
                'times_series' => 4,
                'repetitions' => 8,
                'user_id' => $userFirst->id
            ],
            [
                'name' => 'voador',
                'description' => 'descricao ....',
                'weight' => 15,
                'times_series' => 4,
                'repetitions' => 8,
                'user_id' => $userFirst->id
            ],
            [
                'name' => 'crucifixo',
                'description' => 'descricao ....',
                'weight' => 15,
                'times_series' => 4,
                'repetitions' => 8,
                'user_id' => $userFirst->id
            ]
        ]);

        $userSecond = \App\Models\User::where(['email' => 'alexandre@email.com'])->get()->first();

        Train::insert([
            [
                'name' => 'supino reto',
                'description' => 'descricao ....',
                'weight' => 20,
                'times_series' => 4,
                'repetitions' => 8,
                'user_id' => $userSecond->id
            ],
            [
                'name' => 'supino inclinado',
                'description' => 'descricao ....',
                'weight' => 10,
                'times_series' => 4,
                'repetitions' => 8,
                'user_id' => $userSecond->id
            ],
            [
                'name' => 'voador',
                'description' => 'descricao ....',
                'weight' => 15,
                'times_series' => 4,
                'repetitions' => 8,
                'user_id' => $userSecond->id
            ],
            [
                'name' => 'crucifixo',
                'description' => 'descricao ....',
                'weight' => 15,
                'times_series' => 4,
                'repetitions' => 8,
                'user_id' => $userSecond->id
            ]
        ]);
    }
}
