@component('mail::message')

Greetings Admin, 

@component('mail::panel')
 A New EW-POT Booking is Created by User with Phone Number : <b>{{$mailData['phone']}}</b>
@endcomponent

<b>Booking Details:</b>  

<p><b>Material Type</b><br/> {{$mailData['material']}}</p>
<p><b>Date      </b><br/>     {{$mailData['date']}}</p>
<p><b>Address </b><br/>        {{$mailData['address']}},
                  {{$mailData['city']}},
                  {{$mailData['landmark']}},
                  {{$mailData['state']}},
                  {{$mailData['pincode']}}</p>
<p><b>Message  </b><br/>       {{$mailData['message']}}  </p>



Thanks,<br>
EW-POT(For Mother Earth)
@endcomponent
