// Type definitions for fusioncharts 3.11
// Project: http://www.fusioncharts.com
// Definitions by: Rohit Kumar <https://github.com/rohitkr>, Shivaraj KV <https://github.com/shivarajkv>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare namespace FusionCharts {

    type ChartDataFormats = 'json' | 'jsonurl' | 'csv' | 'xml' | 'xmlurl';

    type ImageHAlign = 'left' | 'right' | 'middle';

    type ImageVAlign = 'top' | 'bottom' | 'middle';

    interface EventObject {
        type: string;

        eventId: number;

        sender: FusionCharts;

        cancelled: boolean;

        stopPropagation: () => void;

        prevented: boolean;

        preventDefault: () => void;

        detached: boolean;

        detachHandler: () => void;
    }

    interface ChartObject {

        type?: string;

        id?: string;

        width?: number | string;

        height?: number | string;

        renderAt?: string;

        dataFormat?: ChartDataFormats;

        dataSource?: string | {};

        events?: {};

        link?: {};

        showDataLoadingMessage?: boolean;

        showChartLoadingMessage?: boolean;

        baseChartMessageFont?: string;

        baseChartMessageFontSize?: string;

        baseChartMessageColor?: string;

        dataLoadStartMessage?: string;

        dataLoadErrorMessage?: string;

        dataInvalidMessage?: string;

        dataEmptyMessage?: string;

        typeNotSupportedMessage?: string;

        loadMessage?: string;

        renderErrorMessage?: string;

        containerBackgroundColor?: string;

        containerBackgroundOpacity?: number;

        containerClassName?: string;

        baseChartMessageImageHAlign?: ImageHAlign;

        dataLoadErrorMessageImageVAlign?: ImageVAlign;

        dataLoadErrorMessageImageAlpha?: number;

        dataLoadErrorMessageImageScale?: number;

        dataLoadStartMessageImageHAlign?: ImageHAlign;

        dataLoadStartMessageImageVAlign?: ImageVAlign;

        dataLoadStartMessageImageAlpha?: number;

        dataLoadStartMessageImageScale?: number;

        dataInvalidMessageImageHAlign?: ImageHAlign;

        dataInvalidMessageImageVAlign?: ImageVAlign;

        dataInvalidMessageImageAlpha?: number;

        dataInvalidMessageImageScale?: number;

        dataEmptyMessageImageHAlign?: ImageHAlign;

        dataEmptyMessageImageVAlign?: ImageVAlign;

        dataEmptyMessageImageAlpha?: number;

        dataEmptyMessageImageScale?: number;

        renderErrorMessageImageHAlign?: ImageHAlign;

        renderErrorMessageImageVAlign?: ImageVAlign;

        renderErrorMessageImageAlpha?: number;

        renderErrorMessageImageScale?: number;

        loadMessageImageHAlign?: ImageHAlign;

        loadMessageImageVAlign?: ImageVAlign;

        loadMessageImageAlpha?: number;

        loadMessageImageScale?: number;
    }

    interface Debugger {
        outputFormat(format: any): void;

        outputTo(callback: (message: any) => any): void;

        enable(state: any, outputTo?: (message: any) => any, outputFormat?: any): void;

        enableFirebugLite(): any;
    }

    interface FusionCharts {
        clone(overrides?: {}, argsOnly?: boolean): any;

        isActive(): boolean;

        chartType(value?: string, options?: any): string;

        addEventListener(eventType: string | string[], callback: (eventObject?: EventObject, eventArgs?: {}) => void, options?: {}): any;

        removeEventListener(eventType: string | string[], callback: (eventObject?: EventObject, eventArgs?: {}) => void): void;

        configureLink(param: {} | any[], level?: number): void;

        setChartAttribute(attributes: ChartObject | string, value?: string): void;

        getChartAttribute(attribute?: string | string[]): ChartObject;

        getXMLData(): any;

        setXMLData(data: string | {}): void;

        setXMLUrl(url: string): void;
        
        setChartDataUrl(url: string, format: ChartDataFormats, config?: any, callback?: () => any, silent?: boolean): any;

        setChartData(data: {}, format: ChartDataFormats, config?: any, callback?: () => any, silent?: boolean): void;

        getChartData(format: ChartDataFormats, advanced?: boolean, update?: boolean): any;

        dataReady(available?: boolean): boolean;

        feedData(stream: string): void;

        getData(): any;

        getDataWithId(): any;

        setData(value: number, label: string): void;

        stopUpdate(): void;
        
        restartUpdate(): void;
        
        isUpdateActive(): boolean;
        
        clearChart(): void;
        
        setDataXML(data: string | {}): void;
        
        setDataURL(url: string, dataType: ChartDataFormats): void;

        hasRendered(): boolean;

        setTransparent(transparency?: boolean): void;
        
        isPlotItemSliced(index: number): boolean;
        
        slicePlotItem(index: number, slice?: boolean, callback?: () => any): void;
        
        centerLabel(labelText: string, options?: {}): void;

        startingAngle(angle?: number, relative?: boolean, callback?: (output) => void): any;

        zoomOut(): void;

        zoomTo(startIndex: number, endIndex: number, event?: any): void;

        resetChart(): void;

        setZoomMode(yes: boolean): void;

        getViewStartIndex(callback?: (startIndex: number) => void): number;

        getViewEndIndex(callback?: (endIndex: number) => void): number;

        print(options?: {}): any;

        exportChart(options?: {}): boolean;

        getSVGString(callback?: (svg:string) => void): string;

        lockResize(state: boolean): boolean;

        showChartMessage(text: string, modal?: boolean, cancelable?: boolean, customAttrs?: any): void;

        showMessage(msg: string, attrs?: any, cancelable?: boolean): void;
        
        hideChartMessage(): void;   

        getJSONData(): JSON;

        setJSONData(data: string | {}): void;

        setJSONUrl(url: string): void;

        getCSVData(): any;

        getDataAsCSV(): any;

        render(containerElement?: string | Element, insertMode?: string, callback?: () => any): FusionCharts;

        resizeTo(width: number | string, height: number | string, silent?: boolean): any;

        dispose(): void;

        configure(options: {}): void;

        getLowerLimit(callback?: (lowerLimit: number) => void): number;

        getUpperLimit(callback?: (upperLimit: number) => void): number;

        setLowerLimit(limit: number, callback?: (isApplied: boolean) => void): void;

        setUpperLimit(limit: number, callback?: (isApplied: boolean) => void): void;

        showLog(): void;

        hideLog(): void;

        clearLog(): void;

        annotations: {
            update(id: string, config:any): any;
            show(id: string): void;
            hide(id: string): void;
            destroy(id: string): void;
            clear(): void;
            addItem(groupId: any, itemConfig?: any, drawImmediate?: any, component?: any): any;
            addGroup(config?: any, component?: any): any;
        };

        setDataForId(id: any, value: any): void;
        getDataForId(id: any, callback?: (value: any) => void): any;
        
        scrollTo(value: number): void;

        ref: {};

    }

    interface Handler {
        (eventObj: any): void;
    }

    interface DataTable {
        count(): number;

        getData(offset?:number, numberOfItems?:number): any;     

        min(columnName: string) : number;

        max(columnName: string) : number;

        unique(columnName: string) : Array<any>;

        extents(columnName: string): any;

        getSchema(): Array<any>;

        addColumns(...args: any[]): void;

        query(queryOperations: any | Array<any>): DataTable;

        getDataStore(): DataStore;

        indexOf(columnName: string): number;

        on(eventName: string, handler: Handler | Array<Handler>): void;

        off(eventName: string, handler: Handler | Array<Handler>): void;

        dispose(): void;
    }

    interface DataStore {
        createDataTable(data: Array<any>, schema: Array<any>, config?: any, id?: string): DataTable;
        
        appendRows(rows: Array<Array<any>>, id?: string): void;

        getDataTable(id: string): DataTable;

        on(eventName: string, handler: Handler | Array<Handler>): void;

        off(eventName: string, handler: Handler | Array<Handler>): void;
        
        trigger(eventName: string, data?: any): void;
        
        dispose(): void;        
    }

    interface DatetimeUnits {
        Year: any;
        Quarter: any;
        Month: any;
        Week: any;
        Day: any;
        Hour: any;
        Minute: any;
        Second: any;
        Millisecond: any;
    }

    interface Weekdays {
        Sunday: any;
        Monday: any;
        Tuesday: any;
        Wednesday: any;
        Thursday: any;
        Friday: any;
        Saturday: any;
    }

    interface Duration {
        Unit: string;
        number: number;
        ms: number;
    }

    interface Utils {
        DatetimeUnits: DatetimeUnits;

        Weekdays: Weekdays;

        duration(DatetimeUnits: DatetimeUnits, number: number): any;

        before(duration: Duration, date?: number, isUTC?: boolean, weekStartFrom?: Weekdays): number;

        after(duration: Duration, date?: number, isUTC?: boolean, weekStartFrom?: Weekdays): number;

        parseDate(date: string, format?: string, isUTC?: boolean): number;

        formatDate(timestamp: number, format?: string, isUTC?: boolean): number;
    }

    interface Operators {
        select(columnName: string | Array<string>): any;

        sort(customSortQuery: any | Array<any> | ((a: any, b: any) => any)): any;

        equals(columnName: string, value: number): any;

        greater(columnName: string, value: number): any;

        greaterEquals(columnName: string, value: number): any;

        less(columnName: string, value: number): any;

        lessEquals(columnName: string, value: number): any;

        between(columnName: string, startValue: number, endValue: number): any;

        filter(customFilterQuery: ((row: Array<any>, columns: any) => any)): any;

        groupBy(groupConfigArr: any | Array<any>, aggrConfigArr: any | Array<any>): any;

        pivot(groupConfigArr: any | Array<any>, pivotColumn: string, aggrConfigArr: any | Array<any>): any;

        pipe(...args: any[]): Array<any>;
    }

    interface DataStoreStatic {
        new (): DataStore;

        Operators: Operators;

        Aggregators: any;
    }

    interface FusionChartStatic {
        new (chartObject: ChartObject|{}): FusionCharts;

        (chartId: string): FusionCharts;

        getObjectReference(elementId: string): Element;

        addEventListener(type: string | string[], listener: (eventObject?: EventObject, eventArgs?: {}) => void): void;

        removeEventListener(type: string | string[], listener: (eventObject?: EventObject, eventArgs?: {}) => void): void;

        ready(callback: (fusionChartStatic?: FusionChartStatic) => any, context?: any): FusionChartStatic;

        transcodeData(data: string | {}, source: ChartDataFormats, target: ChartDataFormats, advanced: boolean): any;

        batchExport(options: {}): void;

        formatNumber(num: number, type?: string, config?: {}): Element;

        setCurrentRenderer(name: string): void;

        getCurrentRenderer(): string;

        render(options?: ChartObject, callback?: () => any): FusionCharts;

        addDep(dep: any): void;

        getDep(name: string, type: string): any;

        on(type: string | string[], listener: (eventObject?: EventObject, eventArgs?: {}) => void): void;

        setAnimation(rule: any): void;

        setEasingEffect(name: string, fn: () => any): void;

        getScriptBaseURI(): string;

        setScriptBaseURI(scriptBaseURI: string): void;

        getChartFromId(id: string): ChartObject;

        DataStore: DataStoreStatic;
        
        Utils: Utils;

        version: string[];

        items: {};

        options: {};

        debugger: Debugger;


    }

}

declare var FusionCharts: FusionCharts.FusionChartStatic;
export = FusionCharts;
export as namespace FusionCharts;