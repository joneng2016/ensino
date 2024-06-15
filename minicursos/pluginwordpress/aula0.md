# Aula Wordpress

## Plugin

__Fonte__ https://www.hostinger.com.br/tutoriais/o-que-e-plugin#O_que_e_plugin_e_como_funciona

Um plugin é um código inserido no seu site WordPress. De forma simples, é uma extensão que aumenta e melhora as funcionalidades do seu site principal.

Utilizar plugins é a forma mais recomendada de aumentar o potencial do seu site sem precisar editar os códigos originais do WordPress.

## Instalando Wordpress

* Faça Download de https://wordpress.org/download/
* Adicione no diretório do XAMPP
* Acesse o banco de dados MySQL (MySQL Workbench)
* Crie a base de dados Wordpress
* Acesse a host via browser e execute os passo a passo.

## Criando o diretório do plugin

Em _wp-content/plugins/_ crie o diretório: aula-plugin. Dentro do diretório, crie o arquivo _aula_plugin.php_. Então inicie a estrutura do seu código assim:

```
<?php
/**
 * Aula plugin
 * 
 * Plugin Name: Aula Plugin
 * Plugin URI: seu host
 * Description: descricao
 * Version: 0.0.1
 * Author: o autor
 * License: GPL2
 * Text Domain: aula-plugin
 * 
 * O objetivo deste plugin consiste ensinar como criar plugins de wordpress
 */

if (!defined('ABSPATH')) {
    die('Invalid request.');
}
```

Vamos montar a classe

```
class AulaPlugin {
    public function __construct() 
    {
    }

    public function create_custom_post_type_modulo() 
    {
    }

    public function activate() 
    {
    }

    public function deactivate() 
    {
    }

    public function uninstall() 
    {
    }
}
```


## O que é Hooks?

__Fonte:__ https://www.hostinger.com.br/tutoriais/wordpress-hooks

WordPress Hooks (também conhecidos como ganchos) são recursos que permitem que você manipule processos sem modificar o arquivo no núcleo do WordPress. Um gancho pode ser aplicado tanto numa ação (action hook) quanto num filtro (filter hook).

Aprender sobre hooks é essencial para qualquer usuário do CMS WordPress. Eles podem ajudá-lo a criar algumas funções ou editar as configurações padrões de temas ou plugins.

## Anexando os métodos das classes nos hooks

```
if (class_exists('AulaPlugin')) {
    $aulaPlugin = new AulaPlugin();

    register_activation_hook(__FILE__, array($aulaPlugin, 'activate'));
    register_deactivation_hook(__FILE__ , array($aulaPlugin, 'deactivate'));
    register_uninstall_hook(__FILE__, array($aulaPlugin, 'uninstall'));
}
```

## Criando a estrutura do formulário de POST

```
    public function create_custom_post_type_modulo()
    {
        $labels = [
            'name'          =>  _x('Aula Plugin','aula_plugin','text_domain'),
            'singular_name' =>  _x('Aula Plugin','aula_plugin','text_domain'),
            'menu_name'     =>  __('Aula plugin','aula_plugin'),
            'name_admin_bar' => __('Aula plugin','aula_plugin')
        ];

        $args = array(
            'label'                 =>  __('Aula plugin','text_domain'),
            'description'           =>  __('Descrição da aula plugin','text_domain'),
            'labels'                =>  $labels,
            'supports'              =>  ['title', 'editor', 'author', 'thumbnail', 'excerpt'],
            'taxonomies'            =>  ['category', 'post_tag'],
            'hierarchical'          =>  false,
            'has_archive'           =>  true,
            'supports'              =>  array('title', 'editor', 'thumbnail'),
            'show_in_rest'          =>  true,
            'public'                =>  true,
            'show_ui'               =>  true,
            'show_in_menu'          =>  true,
            'menu_position'         =>  3,
            'show_in_admin_bar'     =>  true,
            'show_in_nav_menus'     =>  true,
            'can_export'            =>  true,
            'menu_icon'             =>  'dashicons-welcome-learn-more',
            'has_archive'           =>  true,
            'exclude_from_search'   =>  false,
            'publicly_queryable'    =>  true,
            'capability_type'       =>  'page'
        );

        register_post_type('aula_plugin', $args);
    }
```

## Criando a esrutura do active

```
    public function activate()
    {
        $this->create_custom_post_type_modulo();
        flush_rewrite_rules();

        global $wpdb;
        $wpdb->get_results("INSERT INTO wp_posts
            (
                post_author,
                post_content,
                post_title,
                post_status,
                comment_status,
                ping_status,
                post_type,
                comment_count
            ) VALUES (
                1,
                'Teste post',
                'Teste exemplo',
                'publish',
                'open',
                'open',
                'aula_plugin',
                0
            );");
    }
```

```
    public function __construct()
    {
        add_action('init', array($this, 'create_custom_post_type_modulo'));
    }    
```

## deactivate

```
    public function deactivate()
    {
        flush_rewrite_rules();

        global $wpdb;
        $wpdb->get_results("DELETE FROM wp_posts WHERE post_type = 'aula_plugin'");
    }
```