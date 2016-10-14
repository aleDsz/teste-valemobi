<?php

namespace Services;

use Factories\ModelFactory;

/**
 * Model's Service class
 */
class ModelService
{
	public static function create($obj)
	{
		$dao = ModelFactory::getDataAccessInstance();
		$dao->create($obj);
		return self::find($obj);
	}

	public static function save($obj)
	{
		$dao = ModelFactory::getDataAccessInstance();
		$dao->save($obj);
		return self::find($obj);
	}

	public static function find($obj)
	{
		$dao = ModelFactory::getDataAccessInstance();
		return $dao->find($obj);
	}

	public static function findAll($obj)
	{
		$dao = ModelFactory::getDataAccessInstance();
		return $dao->findAll($obj);
	}

	public static function remove($obj)
	{
		$dao = ModelFactory::getDataAccessInstance();
		$dao->remove($obj);
		return null;
	}
}
