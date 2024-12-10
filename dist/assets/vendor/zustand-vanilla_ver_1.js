var zustand = (() => {
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __export = (target, all) => {
        for (var name in all)
            __defProp(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
            for (let key of __getOwnPropNames(from))
                if (!__hasOwnProp.call(to, key) && key !== except)
                    __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
        }
        return to;
    };
    var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

    // /input.ts
    var input_exports = {};
    __export(input_exports, {
        createStore: () => createStore,
        shallow: () => shallow
    });

    // http-url:https://unpkg.com/zustand@5.0.2/esm/vanilla.mjs
    var createStoreImpl = (createState) => {
        let state;
        const listeners = /* @__PURE__ */ new Set();
        const setState = (partial, replace) => {
            const nextState = typeof partial === "function" ? partial(state) : partial;
            if (!Object.is(nextState, state)) {
                const previousState = state;
                state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
                listeners.forEach((listener) => listener(state, previousState));
            }
        };
        const getState = () => state;
        const getInitialState = () => initialState;
        const subscribe = (listener) => {
            listeners.add(listener);
            return () => listeners.delete(listener);
        };
        const api = { setState, getState, getInitialState, subscribe };
        const initialState = state = createState(setState, getState, api);
        return api;
    };
    var createStore = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;

    // http-url:https://unpkg.com/zustand@5.0.2/esm/vanilla/shallow.mjs
    var isIterable = (obj) => Symbol.iterator in obj;
    var hasIterableEntries = (value) => (
        // HACK: avoid checking entries type
        "entries" in value
    );
    var compareEntries = (valueA, valueB) => {
        const mapA = valueA instanceof Map ? valueA : new Map(valueA.entries());
        const mapB = valueB instanceof Map ? valueB : new Map(valueB.entries());
        if (mapA.size !== mapB.size) {
            return false;
        }
        for (const [key, value] of mapA) {
            if (!Object.is(value, mapB.get(key))) {
                return false;
            }
        }
        return true;
    };
    var compareIterables = (valueA, valueB) => {
        const iteratorA = valueA[Symbol.iterator]();
        const iteratorB = valueB[Symbol.iterator]();
        let nextA = iteratorA.next();
        let nextB = iteratorB.next();
        while (!nextA.done && !nextB.done) {
            if (!Object.is(nextA.value, nextB.value)) {
                return false;
            }
            nextA = iteratorA.next();
            nextB = iteratorB.next();
        }
        return !!nextA.done && !!nextB.done;
    };
    function shallow(valueA, valueB) {
        if (Object.is(valueA, valueB)) {
            return true;
        }
        if (typeof valueA !== "object" || valueA === null || typeof valueB !== "object" || valueB === null) {
            return false;
        }
        if (!isIterable(valueA) || !isIterable(valueB)) {
            return compareEntries(
                { entries: () => Object.entries(valueA) },
                { entries: () => Object.entries(valueB) }
            );
        }
        if (hasIterableEntries(valueA) && hasIterableEntries(valueB)) {
            return compareEntries(valueA, valueB);
        }
        return compareIterables(valueA, valueB);
    }
    return __toCommonJS(input_exports);
})();
