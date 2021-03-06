"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var TimeFilterCallBuilder = require("./time_filter_call_builder").TimeFilterCallBuilder;

var TransactionCallBuilder = exports.TransactionCallBuilder = (function (_TimeFilterCallBuilder) {
    /**
     * Creates a new {@link TransactionCallBuilder} pointed to server defined by serverUrl.
     *
     * Do not create this object directly, use {@link Server#transactions}.
     * @see [All Transactions](https://www.stellar.org/developers/horizon/reference/transactions-all.html)
     * @constructor
     * @extends CallBuilder
     * @param {string} serverUrl Horizon server URL.
     */

    function TransactionCallBuilder(serverUrl) {
        _classCallCheck(this, TransactionCallBuilder);

        _get(Object.getPrototypeOf(TransactionCallBuilder.prototype), "constructor", this).call(this, serverUrl);
        this.url.segment("transactions");
    }

    _inherits(TransactionCallBuilder, _TimeFilterCallBuilder);

    _createClass(TransactionCallBuilder, {
        transaction: {

            /**
             * The transaction details endpoint provides information on a single transaction. The transaction hash provided in the hash argument specifies which transaction to load.
             * @see [Transaction Details](https://www.stellar.org/developers/horizon/reference/transactions-single.html)
             * @param {string} transactionId Transaction ID
             * @returns {TransactionCallBuilder}
             */

            value: function transaction(transactionId) {
                this.filter.push(["transactions", transactionId]);
                return this;
            }
        },
        forAccount: {

            /**
             * This endpoint represents all transactions that affected a given account.
             * @see [Transactions for Account](https://www.stellar.org/developers/horizon/reference/transactions-for-account.html)
             * @param {string} accountId For example: `GDGQVOKHW4VEJRU2TETD6DBRKEO5ERCNF353LW5WBFW3JJWQ2BRQ6KDD`
             * @returns {TransactionCallBuilder}
             */

            value: function forAccount(accountId) {
                this.filter.push(["accounts", accountId, "transactions"]);
                return this;
            }
        },
        forLedger: {

            /**
             * This endpoint represents all transactions in a given ledger.
             * @see [Transactions for Ledger](https://www.stellar.org/developers/horizon/reference/transactions-for-ledger.html)
             * @param {number|string} sequence Ledger sequence
             * @returns {TransactionCallBuilder}
             */

            value: function forLedger(sequence) {
                if (typeof sequence == "number") {
                    sequence = sequence.toString();
                }
                this.filter.push(["ledgers", sequence, "transactions"]);
                return this;
            }
        }
    });

    return TransactionCallBuilder;
})(TimeFilterCallBuilder);