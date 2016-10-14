<?php

namespace Entities;

/**
 * @table mercadoria
 */
class Mercadoria
{
	public function __construct()
	{}

	/**
	 * @field codigoMercadoria
	 * @type integer
	 * @pk True
	 * @size 11
	 */
	public $CodigoMercadoria;

	/**
	 * @field tipo
	 * @type smallint
	 * @pk False
	 * @size 1
	 */
	public $Tipo;

	/**
	 * @field nome
	 * @type varchar
	 * @pk False
	 * @size 70
	 */
	public $Nome;

	/**
	 * @field qntd
	 * @type integer
	 * @pk False
	 * @size 11
	 */
	public $Quantidade;

	/**
	 * @field preco
	 * @type decimal
	 * @pk False
	 * @size 10,2
	 */
	public $Preco;

	/**
	 * @field tipoNegocio
	 * @type smallint
	 * @pk False
	 * @size 1
	 */
	public $TipoNegocio;
}