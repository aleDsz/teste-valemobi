<?php

namespace RAR\Framework\Database\SQL\QueryBuilders;

/* Use */
use Exception;
use RAR\Framework\Database\SQL\QueryBuilders\QueryBuilder;
use RAR\Framework\Logging\Log\LogManager;

/**
 * Classe para manipulação de String SQL para a função SELECT
 */
class DeleteQueryBuilder extends QueryBuilder
{
	public function __construct()
	{
	}

	public function ToString()
	{
		try
		{
			$sql  = "DELETE \r\n";
			$sql .= "  FROM {$this->GetFromClause()}\r\n";
			$sql .= " WHERE {$this->GetWhereClause()}\r\n";

			LogManager::LogTrace("SQL: \r\n" . trim($sql), __FUNCTION__);

			return trim($sql);
		}
		catch (Exception $e)
		{
			throw $e;
		}
	}
}

?>