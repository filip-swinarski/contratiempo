<?php 

/*
 * custom elements in post footer
 * for contratiempo website
 * Filip Swinarski 15.01.2016
 */

    $server=$_SERVER['REQUEST_URI'];
    if ($server == '/about/') {
        include 'custom-elements/band-members.html';
    }

?>
