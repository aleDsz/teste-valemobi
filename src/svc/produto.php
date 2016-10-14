<?php

/*
 * Autor              : Alexandre de Souza
 * Data               : 13/10/2016 15:54
 * Objetivo           : Página PHP para obter um objeto do banco de dados
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

	$ListObj = Array();
	$Obj = new Mercadoria();
	$ObjectContext = new ObjectContext($Obj);
	$Obj = @$ObjectContext->FillObject($JsonObject);
	$ListObj = ModelService::find($Obj);
	echo json_encode($ListObj);
}
catch (Exception $ex)
{
	RarFrameworkException::LogError($ex);
}