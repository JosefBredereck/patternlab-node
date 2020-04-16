import chalk from 'chalk';
import Events from 'events';

/**
 * @name Logger
 * @desc tiny event-based logger
 * @type {*}
 */
export class Logger extends Events.EventEmitter {
  constructor() {
    super();
  }

  /**
   * @func debug
   * @desc Coloured debug log
   * @param  {*} msg - The variadic messages to log out.
   * @return {void}
   */
  debug = msg =>
    this.emit('patternlab.debug', this._getColorMessage('green', msg));

  /**
   * @func info
   * @desc Coloured debug log
   * @param  {*} msg - The variadic messages to log out.
   * @return {void}
   */
  info = msg =>
    this.emit('patternlab.info', this._getColorMessage('white', msg));

  /**
   * @func error
   * @desc Coloured error log
   * @param  {*} e - The variadic messages to log out.
   * @return {void}
   */
  error = msg =>
    this.emit('patternlab.error', this._getColorMessage('red', msg));

  private _getColorMessage(color, msg) {
    return `${chalk[color]('⊙ patternlab →')} ${chalk.dim(msg)}`;
  }
}
