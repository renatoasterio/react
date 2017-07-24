const logger = require('./logger');
logger.info('usando o padrão CommonJS!');
const pessoa = new Pessoa('Renato Asterio');
console.log(pessoa.toString());

import Pessoa from './pessoa'