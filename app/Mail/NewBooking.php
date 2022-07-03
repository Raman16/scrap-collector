<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class NewBooking extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($mailData)
    {
        $this->mailData = $mailData;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('A New EW-POT Booking is Created')
                    ->markdown('emails.admin.bookingcreated')
                    ->from('info@ew-pot.com')
                    ->to('electronicwastepot@gmail.com')
                    ->bcc('bandariraman@gmail.com')
                    ->with('mailData', $this->mailData);
    }
}
