<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::table('project_translations', function (Blueprint $table) {
            $table->longText('feedback')->nullable()->after('block_right');
            $table->longText('feedback_author')->nullable()->after('feedback');
            $table->longText('feedback_job')->nullable()->after('feedback_author');
        });
    }

    public function down()
    {
        Schema::table('project_translations', function (Blueprint $table) {
            $table->dropColumn(['feedback', 'feedback_author', 'feedback_job']);
        });
    }
};
