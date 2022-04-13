<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Urls extends Model
{
    use HasFactory;

    protected $guarded = [];
    protected $fillable = ['original_url', 'short_url'];
}
