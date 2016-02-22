<?php
    $server=$_SERVER['REQUEST_URI'];
    if (strpos($server, 'en_GB') !== false) {
        $placeholder = "Search...";
    } elseif (strpos($server, 'es_ES') !== false) {
        $placeholder = "Buscar...";
    } else {
        $placeholder = "Wyszukaj...";
    }
?>
<form action="/" method="get">
    <input type="text" name="s" id="search" value="<?php the_search_query(); ?>" placeholder="<?php echo $placeholder; ?>"/>
</form>
