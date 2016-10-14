<?php

/*
 * Autor              : Alexandre de Souza
 * Data               : 13/10/2016 15:54
 * Objetivo           : Página PHP para criar objetos no banco de dados
 * Última atualização : 
 */

/* RAR Framework */
require_once("uses.php");

$PostData   = file_get_contents("php://input");
$JsonObject = json_decode($PostData);

use Entities\Mercadoria;
use Services\ModelService;
use RAR\Framework\Database\Objects\ObjectContext;
use RAR\Framework\Database\Exceptions\RarFrameworkException;

try
{
	if ($JsonObject == null)
		throw new Exception("JsonObject está nulo", 404);

	$Obj = new Mercadoria();
	$ObjectContext = new ObjectContext($Obj);
	$Obj = $ObjectContext->FillObject($JsonObject);
	ModelService::create($Obj);
	$Obj = ModelService::find($Obj);
	echo json_encode($Obj);
}
catch (Exception $ex)
{
	RarFrameworkException::LogError($ex);
}