<?php
if (!function_exists('get_base64_extension_string')) {

    /**
     *
     * Generate a image extension
     * uses explode() helper for generating the random string
     *
     * @param $string - Base 64 string
     *
     * @return string
     */

    function get_base64_extension_string($string)
    {

        $extension = explode(';base64', $string);
        $extension = explode('/', $extension[0]);
        $extension = $extension[1];
        return $extension;
    }
}
if (!function_exists('convert_base64_to_image')) {

    /**
     *
     * Generate a image extension
     * uses explode() helper for generating the random string
     *
     * @param $string - Base 64 string
     *
     * @return string
     */

    function convert_base64_to_image($string)
    {
        return base64_decode(preg_replace(
            '#^data:image/\w+;base64,#i',
            '',
            $string
        ));
    }
}
