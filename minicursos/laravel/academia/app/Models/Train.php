<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Train extends Model
{
    use HasFactory;

    /**
     * @var string
     */

    protected $table = 'train';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'description',
        'weight',
        'times_series',
        'repetitions',
        'user_id'
    ];

    public function user() {
        return $this->belongsTo(User::class);
    }
}
