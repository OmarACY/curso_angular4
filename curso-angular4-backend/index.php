<?php
    require_once 'vendor/autoload.php';

    $app = new \Slim\Slim();

    $db = new mysqli('localhost', 'root', '', 'curso_angular4');

    $app->get("/pruebas", function() use($app, $db){
        echo "Hola mundo desde Slim PHP";
        var_dump($db);
    });

    $app->get("/probando", function() use($app){
        echo "Texto cualquiera";
    });
    
    // Listar todos los productos
    $app->get("/producto", function() use($app, $db){
        $sql = "SELECT * FROM productos ORDER BY id DESC;";
        $query = $db->query($sql);

        $productos = array();
        while ($producto = $query->fetch_assoc()){
            $productos[] = $producto;
        }

        $result = array(
            'status' => 'success',
            'code'   => 200,
            'data'=>  $productos
        );

        echo json_encode($result);
    });
    // Devolver un producto
    $app->get('/producto/:id', function($id) use($db, $app){
        $sql = 'SELECT * FROM productos WHERE id = '.$id;
        $query = $db->query($sql);

        $result = array(
            'status' => 'error',
            'code'   => 404,
            'message'=>  'Producto no disponible'
        );

        if($query->num_rows == 1){
            $producto = $query->fetch_assoc();
            
            $result = array(
                'status' => 'error',
                'code'   => 200,
                'data'=>  $producto
            );
        }

        echo json_encode($result);
    });
    // Eliminar un producto

    // Actualizar un producto

    // Subir una imagen a un producto
    
    // Guardar productos
    $app->post('/producto', function() use($app, $db){
        $json = $app->request->post('json');
        $data = json_decode($json, true);
        
        if(!isset($data['nombre'])){
            $data['nombre'] = null;
        }

        if(!isset($data['descripcion'])){
            $data['descripcion'] = null;
        }

        if(!isset($data['precio'])){
            $data['precio'] = null;
        }

        if(!isset($data['rutaImagen'])){
            $data['rutaImagen'] = null;
        }

        $query = "INSERT INTO productos (id, nombre, descripcion, precio, rutaImagen) ".
                 " VALUES(NULL,'{$data['nombre']}', '{$data['descripcion']}', {$data['precio']}, '{$data['rutaImagen']}');";
    
        $insert = $db->query($query);

        if($insert){
            $result = array(
                'status' => 'success',
                'code'   => 200,
                'message'=> 'Producto creado correctamente' 
            );
        }else{
            $result = array(
                'status' => 'error',
                'code'   => 404,
                'message'=> 'Producto no creado' 
            );
        }

        echo json_encode($result);
    });

    $app->run();
?>