CREATE DATABASE  IF NOT EXISTS `TITULOSRECEBER` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `TITULOSRECEBER`;

--
-- Table structure for table `EMPRESA (com campos identificados pela sigla EMP)`
--

DROP TABLE IF EXISTS `empresa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empresa` (
  `emp_codigo` int NOT NULL AUTO_INCREMENT,
  `emp_nome` varchar(30) DEFAULT NULL,
  `emp_fantasia` varchar(15) DEFAULT NULL,
  `emp_telefone` varchar(15) DEFAULT NULL,
  `emp_fundacao` int DEFAULT NULL,
  PRIMARY KEY (`emp_codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empresa`
--

LOCK TABLES `empresa` WRITE;
/*!40000 ALTER TABLE `empresa` DISABLE KEYS */;
INSERT INTO `empresa` VALUES
(1, 'JC Imóveis Ltda','Viver Imóveis','(16)99999-9999','1985'),
(2, 'RA Alimentos ME','Boi Branco','(16)99999-8888','2010'),
(3, 'MM Moveis Eireli','Movelar','(16)99999-7777', '2018');
/*!40000 ALTER TABLE `empresa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `CONTARECEBER (com campos identificados pela sigla TPR)`
--

DROP TABLE IF EXISTS `contareceber`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contareceber` (
  `tpr_codigo` int NOT NULL AUTO_INCREMENT,
  `tpr_descricao` varchar(20) DEFAULT NULL,
  `tpr_tipo` varchar(10) DEFAULT NULL,
  `tpr_valor` numeric(12,2) DEFAULT NULL,
  `tpr_vencimento` varchar(10) DEFAULT NULL,
  `emp_codigo` int NOT NULL,
  PRIMARY KEY (`tpr_codigo`),
  KEY `fk_contareceber_empresa_idx` (`emp_codigo`),
  CONSTRAINT `fk_contareceber_empresa` FOREIGN KEY (`emp_codigo`) REFERENCES `empresa` (`emp_codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contareceber`
--

LOCK TABLES `contareceber` WRITE;
/*!40000 ALTER TABLE `contareceber` DISABLE KEYS */;
INSERT INTO `contareceber` VALUES
(1, 'Escritório Comercial','Aluguel','5000.00','2021-11-30', 1),
(2, 'Café da Manhã','Alimentos','2820.00','2021-12-11', 2),
(3, 'Moveis de Escritório','Reforma','25200.00','2021-12-04', 3);
/*!40000 ALTER TABLE `contareceber` ENABLE KEYS */;
UNLOCK TABLES;


