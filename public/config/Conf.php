<?php

class Conf {

    static private $debug = TRUE;

    static private $databases = array(
    // ou localhost sur votre machine
    'hostname' => 'localhost',
    // A l'IUT, vous avez une BDD nommee comme votre login
    // Sur votre machine, vous devrez creer une BDD
    'database' => 'gsbproject',
    // A l'IUT, c'est votre login
    // Sur votre machine, vous avez surement un compte 'root'
    'login' => 'root',
    // A l'IUT, c'est votre mdp (INE par defaut)
    // Sur votre machine personelle, vous avez creez ce mdp a l'installation
    'password' => ''
    );
    static public function getLogin() {
    //en PHP l'indice d'un tableau n'est pas forcement un chiffre.
    return self::$databases['login'];
    }

    static public function getHostname(){
        return self::$databases['hostname'];
    }

    static public function getPassword(){
        return self::$databases['password'];
    }

    static public function getDatabase(){
        return self::$databases['database'];
    }

    static public function getDebug(){
        return self::$debug;
    }

    }
?>