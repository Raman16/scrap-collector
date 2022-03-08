<?php

use App\Models\ScrapCollection;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateScrapCollectionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('scrap_collections', function (Blueprint $table) {
            $table->id();

            $table->bigInteger('user_id')->unsigned();
            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');

            $table->bigInteger('material_type_id')->unsigned();
            $table->foreign('material_type_id')
                ->references('id')
                ->on('material_types')
                ->onDelete('cascade');
            $table->text('message')->nullable();

            $table->dateTime('pickup_date');

            $table->bigInteger('address_id')->unsigned();
            $table->foreign('address_id')
                ->references('id')
                ->on('addresses')
                ->onDelete('cascade');


            $table->bigInteger('bank_id')->unsigned();
            $table->foreign('bank_id')
                ->references('id')
                ->on('bank_details')
                ->onDelete('cascade');

            $table->enum('status', ScrapCollection::BOOKING_STATUS)->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('scrap_collections');
    }
}
