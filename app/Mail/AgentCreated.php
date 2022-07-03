<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class AgentCreated extends Mailable
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
        return $this->subject('Welcome to EW-POT onboard')
                    ->markdown('emails.admin.agent_created')
                    ->from('info@ew-pot.com')
                    ->to('bandariraman@gmail.com')
                    ->bcc('bandariraman@gmail.com')
                    ->with('mailData', $this->mailData);
    }
}
