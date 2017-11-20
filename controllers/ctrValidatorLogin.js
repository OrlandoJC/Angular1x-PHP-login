app.controller('ctrValidator', function($scope, $http){
   
    $scope.usuarios         = {};
    $scope.usuarios.usuario = "";
    $scope.usuarios.pass    = "";



    $scope.showInfo = function(){
        console.log($scope.usuarios.usuario);
        console.log($scope.usuarios.pass);
    }

    
    $scope.validaUsuario = function (){
        var isValidate = $scope.validar();

        if (isValidate) {
            $http.post("./php/verificarUsuario.php", $scope.usuarios).success(function (res) {
                if (res == "Success") {
                    swal("Bienvenido", "Logueo exitoso","success");
                    $scope.limpiar();
                }else{
                    swal("Lo sentimos", "Usuario no existente en la base de datos","warning");
                }
            });
        }
    }




    $scope.validar = () => {
        $scope.show();
        var ok = false;
        
        if ($scope.usuarios.usuario == "") {
            swal({
                Title :" uno o mas campos incorrectos", 
                Text :"pudiste no haber llenado al gun campo",
                icon: "warning",
              });
        } else if ($scope.usuarios.pass == "") {
            swal(
                "Contraseña invalida", 
                "Tienes que llenar el campo",
                "warning"
              );
        } else {
            ok = true;
        }
        return ok;
    }



    $scope.limpiar = function () {
        $scope.usuarios.usuario = "";
        $scope.usuarios.pass = "";
        $scope.usuarios.idUsuario ="";
    }

  


    /*
    $scope.validaUsuario = function(){
        var ok = $scope.validar();
        if (ok == true) {
            $http.post("./php/verificarUsuario.php", $scope.usuarios).success(function (res) {
                if (res == "Success") {
                    console.log("exito");
                }
            });
        }
    }


    $scope.validar = function () {
        var ok = false;
        if ($scope.usuarios.usuario == "") {
            sweetAlert("Oops...", "Se requiere un usuario", "warning");
        } else if ($scope.usuarios.pass == "") {
            sweetAlert("Oops...", "Se requiere un pass", "warning");
        } else {
            ok = true;
        }
        return ok;
    }
    */
    


    //helpers

/*
    $scope.limpiar = function () {
        $scope.usuarios.usuario = "";
        $scope.usuarios.pass = "";
        $scope.usuarios.idUsuario ="";
    }
*/


});