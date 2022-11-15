<?php

    require_once ('config/Conf.php');

    class ModelConf
    {

        static public $pdo;

        static public function init()
        {
            $hostname=Conf::getHostname();
            $database_name=Conf::getDatabase();
            $login=Conf::getLogin();
            $password=Conf::getPassword();

            try{
                self::$pdo = new PDO("mysql:host=$hostname;dbname=$database_name",$login,$password, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
            }catch(PDOException $e){
                if(Conf::getDebug()){
                    echo $e->getMessage();
                }else{
                    echo 'Une erreur est survenue 🤖 Retour a l accueil';
                }
                die();
            }
            
        }

        static public function escape($valeur){
            // Convertit les caractères spéciaux en entités HTML
            return htmlspecialchars($valeur, ENT_QUOTES, 'UTF-8', false);
        }
    }

    ModelConf::Init();

?>
