<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\User;
use Illuminate\Support\Facades\Hash;


class RecordUsersSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        (new User)->insert(
            [
                [
                    'name' => 'Rodrigo José da Silva',
                    'email' => 'jose@email.com',
                    'password' => Hash::make('senha1') 
                ],
                [
                    'name' => 'Alexandre José da Silva',
                    'email' => 'alexandre@email.com',
                    'password' => Hash::make('senha2') 
                ]
            ]            
        );
    }
}
