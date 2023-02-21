<?php

namespace App\Http\Controllers;

use App\Models\Member;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $team_members = Member::active()->get();
        $products = Product::active()->get();
        return Inertia::render('Homepage', ['members' => $team_members, 'products' => $products]);
    }
}
