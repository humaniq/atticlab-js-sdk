import {CallBuilder} from "./call_builder";

export class TimeFilterCallBuilder extends CallBuilder {

    constructor(serverUrl) {
        super(serverUrl);
    }

    /**
     * Adds `after` parameter to the current call. Returns the TimeFilterCallBuilder object on which this method has been called.
     * @param {"2006-01-02T15:04:05Z"} after
     */
    after(after) {
        this.url.addQuery("after", after);
        return this;
    }

    /**
     * Adds `before` parameter to the current call. Returns the TimeFilterCallBuilder object on which this method has been called.
     * @param {"2006-01-02T15:04:05Z"} before
     */
    before(before) {
        this.url.addQuery("before", before);
        return this;
    }

}