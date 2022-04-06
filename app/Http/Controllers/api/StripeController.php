<?php
namespace App\Http\Controllers\api;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Session;
use Stripe;
    
class StripeController extends Controller
{
    /**
     * success response method.
     *
     * @return \Illuminate\Http\Response
     */
    // public function stripe()
    // {
    //     return view('stripe');
    // }
   
    /**
     * success response method.
     *
     * @return \Illuminate\Http\Response
     */
    public function stripePost(Request $request)
    {

        $stripe = new \Stripe\StripeClient(
            'sk_test_51KiuBBSBCeqSorANNJdfa7KhYTNGpVQtvSPeAjCGkejEj4IDiKsx5qOh5BR2mTiN9Abtd6CGbduEoUzCBBFOdFvb00OEu0W0GC'
          );
          $stripe->customers->verifySource(
            'cus_LQAHnzO8ZltFf2',
            'ba_1KjK3fSBCeqSorANrkvPN7AO',
            ['amounts' => [32, 45]]
          );

          
          
      
          
          
    }
}