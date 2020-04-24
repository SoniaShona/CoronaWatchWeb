<?php
    $message = '' ;
    $error = '' ;

    if (isset($_POST['submit'])) {
        if (file_exists('data.json')) {
            $current_data = file_get_contents('data.json');
            $array_data = json_decode($current_data, true) ;
            $extrat = array(
                "id" => 9 ,
                "titreArticle" => $_POST['titreArticle'],
                "ContenuArticle" => $_POST['contentArticle'] ,
                
                "imagesArticle" => [
                {
                    "srcimg" => "../../../public/mediaArticles/img1_article2_redactor2.jpg"
                }
            
                ],
            "redacteur" => "nom du Redacteur 2",
            "date" => "2020-04-06 15:51:00"
            );
            $array_data[] = $extrat ;
            $final_data = json_encode($array_data);
            if (file_put_contents('data.json'), $final_data) {
                $message = "Article envoyé au modérateur";
            }
            else {
                $error = 'Failled' ;
            }
        }
        else {
            $error = "JSON file not found" ;
        }
    }
    else {
        $error = "form not submitted" ;
    }