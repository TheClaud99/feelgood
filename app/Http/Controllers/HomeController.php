<?php

namespace App\Http\Controllers;

use App\Models\Member;
use App\Models\Product;
use App\Models\Event;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index(): \Inertia\Response
    {
        $team_members = Member::active()->get();
        $products = Product::active()->get();
        $events = Event::active()->get();
        return Inertia::render('Homepage', ['members' => $team_members, 'products' => $products, 'events' => $events]);
    }
}
